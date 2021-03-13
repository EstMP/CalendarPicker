class PreviousDayAction {
    
    public run(calendar: Calendar): void {

        const date = calendar.dateGrabber.getPrevEnabledDate(
            calendar.dayGenerator.getDays(), calendar.options.getDate());

        if (date !== INVALID_DATE) {

            calendar.events.changeDayEvent(calendar, date);

        } else {

            calendar.action.prevMonthAction.run('scheduler.previous.month', calendar);

        }

    }

}