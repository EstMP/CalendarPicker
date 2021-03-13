class NextMonthAction {

    /**
     * Check if next month is enabled by 'disabled from' option
     * and fire event
     * 
     * @param calendar 
     */
    public run(calendar: Calendar): void {

        const thereIsNextMonthEnabled = calendar.dayChecker.thereIsNextMonthEnabled(
            calendar.options.getDate(), calendar.options.getDisable().getFrom());

        if (thereIsNextMonthEnabled) {

            calendar.events.changeMonthEvent(calendar, '');
            
        }

    }

}