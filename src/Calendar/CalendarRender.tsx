const WEEK_NAMES = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
const WEEK_NAMES_NORMALIZE = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];

class CalendarRender implements iObserver {

    public update(subject: iObservable): void {

        if (subject instanceof Calendar) {

            let container = document.getElementById(subject.options.getTarget());
            if (container === null) {
                throw CONTAINER_NOT_FOUND;
            } else {
                container.innerHTML = "";
            }


            if (subject.options.getType() == 'month') {
                this.renderMonth(subject, container);
            }

            if (subject.options.getType() == 'year') {
                this.renderYear(subject, container);
            }

        }

    }

    private renderMonth(calendar: Calendar, container: HTMLElement) {

        const p = calendar.action.prevDayAction.run.bind(calendar.action.prevDayAction);
        const n = calendar.action.nextDayAction.run.bind(calendar.action.nextDayAction);
        const isNextDisabled = !calendar.dayChecker.thereIsNextDay(calendar.options.getDate(), calendar.options.getDisable().getFrom(), calendar.dayGenerator.getDays());
        const isPrevDisabled = !calendar.dayChecker.thereIsPrevDay(calendar.options.getDate(), calendar.options.getDisable().getTo(), calendar.dayGenerator.getDays());

        function prevEvent(e: MouseEvent) {

            if (!isPrevDisabled) {

                const t = e.target as HTMLButtonElement;
                createSpinner();
                p(calendar); t.disabled = true;

            }
        }

        function nextEvent(e: MouseEvent) {

            if (!isNextDisabled) {

                const t = e.target as HTMLButtonElement;
                createSpinner();
                n(calendar); t.disabled = true;

            }

        }

        let localeStr = calendar.options.getDate().toLocaleString(
            undefined,
            { month: 'long' }) + ' de ' + calendar.options.getDate().getFullYear();


        let weekday = calendar.options.getDate().toLocaleString(
            undefined,
            { weekday: 'long' });


        function cal() {
            let tr = <tr></tr>;
            let showPrevBtn = calendar.dayChecker.thereIsPrevMonthEnabled(calendar.options.getDate(), calendar.options.getDisable().getTo());
            let showNextBtn = calendar.dayChecker.thereIsNextMonthEnabled(calendar.options.getDate(), calendar.options.getDisable().getFrom());

            function prevMonthClick() {
                if (showPrevBtn) {
                    createSpinner();
                    calendar.action.prevMonthAction.run('calendar.prev.month', calendar);
                }
            }
            function nextMonthClick() {
                if (showNextBtn) {
                    createSpinner();
                    calendar.action.nextMonthAction.run(calendar);
                }
            }

            return (
                <div>

                    <div id="sch-header">
                        <div id="sch-date">
                            <div id="sch-date-month">
                                <span>{weekday}</span>
                            </div>
                            <div id="sch-date-date">
                                <button id="sch-prev-btn" disabled={isPrevDisabled} onClick={prevEvent}>{'<'}</button>
                                <span>{calendar.options.getDate().getDate()}</span>
                                <button id="sch-next-btn" disabled={isNextDisabled} onClick={nextEvent}>{'>'}</button>
                            </div>
                        </div>
                    </div>

                    <div id="cal-control">
                        <button id="cal-prev-btn" disabled={!showPrevBtn} onClick={prevMonthClick}>{'<'}</button>
                        <button id="cal-next-btn" disabled={!showNextBtn} onClick={nextMonthClick}>{'>'}</button>
                        <span>{localeStr}</span>
                    </div>
                    <table>
                        <tr>
                            {WEEK_NAMES.map(weekName => (
                                <th>{weekName}</th>
                            ))}
                        </tr>

                        {calendar.dayGenerator.getDays().map((day, i) => {


                            let availability = NaN;

                            let mods = day.getModData();
                            mods.forEach(mod => {
                                if (mod instanceof DayAvailabilityData) {
                                    availability = mod.getData();
                                }
                            });

                            //let availability: number = new DayAvailability(calendar.options.getavailability()).getData(day);


                            let selected = '';
                            let dayClass = '';
                            if (i % 7 === 0) tr = <tr></tr>;
                            if (day.isToday()) dayClass = 'today';
                            if (day.isDisabled()) {
                                dayClass += ' disabled'
                            } else {
                                if (availability < 20) {
                                    dayClass += ' availability-less-20';
                                } else if (availability < 40) {
                                    dayClass += ' availability-less-40';
                                } else if (availability < 60) {
                                    dayClass += ' availability-less-60';
                                } else if (availability < 80) {
                                    dayClass += ' availability-less-80';
                                } else if (availability <= 100) {
                                    dayClass += ' availability-equals-100';
                                }

                                if (calendar.options.getSelectedDate().getTime() === day.getDate().getTime()) {
                                    selected = 'selected';
                                }

                            }

                            tr.appendChild(
                                <td class={dayClass + ' ' + selected} onClick={
                                    function (e: MouseEvent) {
                                        const t = e.currentTarget as HTMLTableDataCellElement;
                                        if (t.id !== 'selected' && !day.isDisabled()) {
                                            calendar.events.changeDayEvent(calendar, day.getDate());
                                        }

                                    }
                                }><div>{day.getDay()}</div></td>
                            )
                            return tr

                        })}

                    </table>
                </div>
            );
        }


        container.appendChild(cal());

        function createSpinner(): void {

            const wrapper = document.createElement('div');
            wrapper.style.position = 'absolute';
            wrapper.style.top = '0';
            wrapper.style.width = '100%';
            wrapper.style.height = '100%';
            wrapper.style.opacity = '0.8';
            wrapper.style.backgroundColor = 'white';

            let container = document.getElementById(calendar.options.getTarget());
            if (container) {
                container.style.position = 'relative';
                container.appendChild(wrapper);
            }

        }

    }

    private renderYear(calendar: Calendar, container: HTMLElement) {

        function cal() {
            let lastMonth = -1;
            let days = calendar.dayGenerator.getDays();
            let divMonth = <div></div>;

            return (
                <div class="year">

                    {days.map((day: Day, i) => {

                        let notes = calendar.options.getNotes().getDefault();

                        let mods = day.getModData();
                        mods.forEach(mod => {
                            if (mod instanceof DayNotesData) {
                                notes = mod.getData();
                            }
                        });

                        if (day.getDate().getMonth() !== lastMonth) {
                            lastMonth = day.getDate().getMonth();
                            let localeStr = day.getDate().toLocaleString(
                                undefined,
                                { month: 'long' });

                            divMonth = <div class="month"><div class="month-name">{localeStr}</div></div>;
                        }

                        let selected = '';
                        let dayClass = '';
                        let dayNoteInfo = false;
                        if (day.isToday()) dayClass = 'today';
                        if (notes.length > 0) {
                            dayClass += ' note ' + notes[0].type;
                            dayNoteInfo = true;
                        }
                        if (day.isDisabled()) {
                            dayClass += ' disabled'
                        } else {

                            if (calendar.options.getSelectedDate().getTime() === day.getDate().getTime()) {
                                selected = 'selected';
                            }
                        }

                        divMonth.appendChild(
                            <div class={dayClass + ' day'} title={notes.map((note, i) => {
                                return note.note + '\n';
                            })}>
                                <div class={selected} onClick={
                                    function (e: MouseEvent) {
                                        const t = e.currentTarget as HTMLElement;
                                        if (!t.classList.contains('selected') && !day.isDisabled()) {
                                            calendar.events.changeDayEvent(calendar, day.getDate());
                                        }
                                    }
                                }>
                                    <div class="day-cell day-number">{day.getDay()}</div>
                                    <div class="day-cell day-weekname">{WEEK_NAMES_NORMALIZE[day.getDate().getDay()]}</div>
                                    {dayNoteInfo ? <div class='day-cell day-note-info'>ℹ</div> : <div class="third-day-cell"></div>}

                                </div>
                                <div class="notes-data-wrapper">
                                    <div class="notes-data">
                                        {
                                            notes.map((note, i) => {
                                                return <div>{note.note}</div>

                                            })
                                        }
                                    </div>
                                </div>
                            </div>

                        )

                        return divMonth

                    })}
                </div>
            );
        }

        container.appendChild(cal());

    }

}