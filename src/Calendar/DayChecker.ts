class DayChecker implements iDayChecker {

    /**
     * Check if there is a previous day enabled
     * 
     * @param date 
     * @param disableTo 
     * @param calendar 
     * @returns 
     */
    public thereIsPrevDay(date: Date, disableTo: Date, calendar: Array<Day>): boolean {

        const prevDaysAvailable = calendar.filter((day) => {

            const enabled = !day.isDisabled();
            const dayDateTime = day.getDate().getTime();

            return enabled && dayDateTime < date.getTime();

        })

        if (prevDaysAvailable.length === 0 && !this.thereIsPrevMonthEnabled(date, disableTo)) {
            return false;
        }

        return true;

    }

    /**
     * Check if there is a next day enabled
     * 
     * @param date 
     * @param disabledFrom 
     * @param calendar 
     * @returns 
     */
    public thereIsNextDay(date: Date, disabledFrom: Date, calendar: Array<Day>): boolean {

        const nextDaysAvailable = calendar.filter((day) => {

            const enabled = !day.isDisabled();
            const dayDateTime = day.getDate().getTime();

            return enabled && dayDateTime > date.getTime();

        })

        if (nextDaysAvailable.length === 0 && !this.thereIsNextMonthEnabled(date, disabledFrom)) {
            return false;
        }

        return true;

    }

    /**
     * Check if there is a previous month enabled
     * 
     * @param date 
     * @param getTo 
     * @returns 
     */
    public thereIsPrevMonthEnabled(date: Date, getTo: Date): boolean {

        const disabledToDate = getTo;
        const disabledToDateYear = disabledToDate.getFullYear();
        const disabledToDateMonth = disabledToDate.getMonth();
        const calendarDate = date;
        const calendarDateYear = calendarDate.getFullYear();
        const calendarDateMonth = calendarDate.getMonth();

        if ((disabledToDateYear == calendarDateYear &&
            disabledToDateMonth == calendarDateMonth)) {
            return false;
        }

        return true;

    }

    /**
     * Check if there is a next month enabled
     * 
     * @param date 
     * @param disableFrom 
     * @returns 
     */
    public thereIsNextMonthEnabled(date: Date, disableFrom: Date): boolean {

        const disabledFrom = disableFrom;
        const nextMonthDate = new Date(date.getTime());
        nextMonthDate.setDate(1);
        nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);

        if (nextMonthDate.getTime() >= disabledFrom.getTime()) {
            return false;
        }

        return true;
    }


}