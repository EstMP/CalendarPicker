class DateGrabber implements iDateGrabber {

    /**
     * Returns the earliest available date or the latest 
     * depending on the type
     * 
     * @param calendar 
     * @param type 
     */
    public getFirstLastEnabledDate(calendar: Day[], type: string): Date {

        const enabledDays = calendar.filter((day) => {
            return !day.isDisabled();
        });

        if (enabledDays.length > 0) {

            if (type === 'scheduler.previous.month') {
                return enabledDays[enabledDays.length - 1].getDate();
            } else {
                return enabledDays[0].getDate();

            }

        }

        return INVALID_DATE;

    }

    /**
     * Returns the next available date
     * 
     * @param calendar 
     * @param date 
     */
    public getNextEnabledDate(calendar: Day[], date: Date): Date {

        const enabledDaysGreaterThanDate = calendar.filter((day) => {

            const enabled = !day.isDisabled();
            const dayDateTime = day.getDate().getTime();
            const calendarDateTime = date.getTime();

            return enabled && dayDateTime > calendarDateTime;

        });

        if (enabledDaysGreaterThanDate.length > 0) {
            return enabledDaysGreaterThanDate[0].getDate();
        }

        return INVALID_DATE;

    }

    /**
     * Returns the previous available date
     * 
     * @param calendar 
     * @param date 
     */
    public getPrevEnabledDate(calendar: Day[], date: Date): Date {

        const enabledDaysEarlierThanDate = calendar.filter((day) => {

            const enabled = !day.isDisabled();
            const dayDateTime = day.getDate().getTime();
            const calendarDateTime = date.getTime();

            return enabled && dayDateTime < calendarDateTime;

        });

        if (enabledDaysEarlierThanDate.length > 0) {
            const lastIndex = enabledDaysEarlierThanDate.length-1;
            return enabledDaysEarlierThanDate[lastIndex].getDate();
        }

        return INVALID_DATE;

    }

}