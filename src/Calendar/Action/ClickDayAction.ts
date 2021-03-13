class ClickDayAction {

    private events: iCalendarEvents;
    private calendar: Calendar;

    constructor(events: iCalendarEvents, calendar: Calendar) {

        this.events = events;
        this.calendar = calendar;

    }

    public run(date: Date): void {
        
        this.events.changeDayEvent(this.calendar, date);

    }
    
}