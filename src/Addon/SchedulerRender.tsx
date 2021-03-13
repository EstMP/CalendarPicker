class SchedulerRender implements iObserver {

    public update(subject: iObservable): void {

        if (subject instanceof Scheduler) {

            this.render(subject);

        }

    }

    render(sch: Scheduler) {

        const options = sch.schedulerOptions;

        let container = document.getElementById(options.getTarget());
        if (container === null) {
            throw CONTAINER_NOT_FOUND;
        } else {
            container.innerHTML = "";
        }

        if (sch.calendarOptions.getSelectedDate().getTime() !== options.getDate().getTime()) {
            createSpinner();
        }

        function scheduler_template() {

            const clickTimeEvent = options.clickTimeEvent.bind(sch);

            return (
                <div>
                    <div id="sch-body">
                        <div id="sch-body-schedules">
                            <h2>Horario</h2>
                            <ul>
                                {
                                options.getValues().length == 0 ? sch.NO_SCHEDULES_MESSAGE :
                                options.getValues().map((value) => {
                                    const date = DateHelper.timesToDates(
                                        [value], options.getDate())[0];

                                    return <li onClick={function (e: MouseEvent) {
                                        const t = e.target as HTMLDataListElement;
                                        clickTimeEvent(date);
                                    }}> {value.substring(0, 5)} </li>
                                })}
                            </ul>
                        </div>
                    </div>

                </div>
            )
        }

        container.appendChild(scheduler_template());

        function createSpinner(): void {

            const wrapper = document.createElement('div');
            wrapper.style.position = 'absolute';
            wrapper.style.top = '0';
            wrapper.style.width = '100%';
            wrapper.style.height = '100%';
            wrapper.style.opacity = '0.8';
            wrapper.style.backgroundColor = 'white';

            let container = document.getElementById(options.getTarget());
            if (container) {
                container.style.position = 'relative';
                container.appendChild(wrapper);
            }

        }

    }
}
