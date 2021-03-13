class NextDayAction {

    public run(calendar: Calendar): void {

        const date = calendar.dateGrabber.getNextEnabledDate(
            calendar.dayGenerator.getDays(), calendar.options.getDate());

        if (date !== INVALID_DATE) {

            calendar.events.changeDayEvent(calendar, date);

        } else {

            calendar.action.nextMonthAction.run(calendar);

        }

    }

}