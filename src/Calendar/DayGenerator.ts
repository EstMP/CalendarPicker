class DayGenerator implements iDayGenerator {

    private options: CalendarOptions;
    private days: Array<Day>;
    private mods: DayMods;

    constructor(options: CalendarOptions, mods: DayMods) {

        this.options = options;
        this.days = [];
        this.mods = mods;
        this.generate();

    }

    /**
     * Generates a calendar based on the options
     */
    public generate(): void {

        const calendar = new Array();
        const date = this.options.getDate();
        const disableOptions = this.options.getDisable();
        const disableFrom = disableOptions.getFrom();
        const disableTo = disableOptions.getTo();
        const disabledDates = disableOptions.getDates();
        const disableWeekdays = disableOptions.getWeekdays();
        const firstDate = DateHelper.getFirstDayOfTheWeek(date) - 1;
        const today = DateHelper.getTodayDate();

        const _date = new Date(date.getFullYear(), date.getMonth());
        _date.setDate(_date.getDate() - firstDate);

        for (let i = 0; i < 42; i++) {

            const dateDay = new Date(_date.getTime());

            const isDisableFrom = disableFrom.getTime() !== NaN ? disableFrom <= dateDay : false;
            const isDisableTo = disableTo && _date.getTime() < disableTo.getTime();
            const isCurrentMonth = _date.getMonth() == date.getMonth();
            const isDisableDate = DateHelper.findDate(
                disabledDates, dateDay);
            const isDisableWeekday = DateHelper.findNumber(
                disableWeekdays, dateDay.getDay());
            const isDisabled = isDisableTo || !isCurrentMonth || isDisableDate || isDisableWeekday || isDisableFrom;
            const isToday = _date.getTime() == today.getTime();

            const day = new Day(dateDay, isCurrentMonth, isDisabled, isToday);
            this.mods.apply(day);

            calendar.push(day);

            _date.setDate(_date.getDate() + 1);

        }

        this.days = calendar;

    }

    /**
     * Get the calendar days
     * 
     * @returns 
     */
    public getDays(): Array<Day> {

        return this.days;

    }

}