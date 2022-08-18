class YearGenerator implements iDayGenerator {

    private options: CalendarOptions;
    private months: Array<Array<Day>>;
    private mods: DayMods;

    constructor(options: CalendarOptions, mods: DayMods) {

        this.options = options;
        this.months = [];
        this.mods = mods;
        this.generate();

    }

    /**
     * Generates a calendar based on the options
     */
    public generate(): void {

        const date = this.options.getDate();
        const disableOptions = this.options.getDisable();
        const disableFrom = disableOptions.getFrom();
        const disableTo = disableOptions.getTo();
        const disabledDates = disableOptions.getDates();
        const disableWeekdays = disableOptions.getWeekdays();
        const firstDate = DateHelper.getFirstDayOfTheWeek(date) - 1;
        const today = DateHelper.getTodayDate();

        // Starts in January
        const _date = new Date(date.getFullYear(), 0);

        for (let index = 0; index < 12; index++) {

            const calendar = new Array();
            const month = new Month(_date, false, false);
            const year = [];
            const days = month.getDays();

            for (let index = 0; index < days.length; index++) {
                const dateDay = days[index];

                const isDisableFrom = disableFrom.getTime() !== NaN ? disableFrom <= dateDay : false;
                const isDisableTo = disableTo && dateDay.getTime() < disableTo.getTime();
                const isCurrentMonth = dateDay.getMonth() == date.getMonth();
                const isDisableDate = DateHelper.findDate(
                    disabledDates, dateDay);
                const isDisableWeekday = DateHelper.findNumber(
                    disableWeekdays, dateDay.getDay());
                const isDisabled =  isDisableDate || isDisableWeekday || isDisableFrom;
                const isToday = dateDay.getTime() == today.getTime();

                const day = new Day(dateDay, isCurrentMonth, isDisabled, isToday);
                this.mods.apply(day);

                calendar.push(day);

            }

            this.months.push(calendar);
            _date.setMonth(_date.getMonth() + 1);

        }

    }

    getDays(): any[] {
        return this.months;
    }

    getMonths(): Array<Array<Day>> {
        return this.months;
    }

}