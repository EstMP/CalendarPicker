class PreviousMonthAction {

    /**
     * Check if previous month is enabled by 'disabled to' option
     * and fire event according on the type
     * 
     * @param type 'scheduler.previous.month' or 'calendar.previous.month'
     * @param calendar 
     */
    public run(type: string, calendar: Calendar) {

        const thereIsPrevMonthEnabled = calendar.dayChecker.thereIsPrevMonthEnabled(
            calendar.options.getDate(), calendar.options.getDisable().getTo());

        if (thereIsPrevMonthEnabled) {

            calendar.events.changeMonthEvent(calendar, type);

        }

    }

}