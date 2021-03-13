class DateControl implements iDateControl {

    private options: CalendarOptions;

    constructor(options: CalendarOptions) {
        this.options = options;
    }

    /**
     * Set previous month
     * 
     */
    public setPrevMonth(): void {

        const date = this.options.getDate();
        date.setDate(1);
        date.setMonth(date.getMonth() - 1);

    }

    /**
     * Set next month
     * 
     */
    public setNextMonth(): void {

        const date = this.options.getDate();
        date.setDate(1);
        date.setMonth(date.getMonth() + 1);

    }

    /**
     * Set day
     * 
     * @param date 
     */
    public setDay(date: Date): void {

        this.options.setDate(date);
        this.options.setSelectedDate(date);

    }

}