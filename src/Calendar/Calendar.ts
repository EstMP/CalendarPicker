/// <reference path="../Observable.ts" />

class Calendar extends Observable {

    public options: CalendarOptions;
    public dayGenerator: iDayGenerator;
    public dayChecker: iDayChecker;
    public dateControl: iDateControl;
    public dateGrabber: iDateGrabber;
    public addonManager: iAddonManager;
    public action: iAction;
    public events: iCalendarEvents;

    /**
     * Set all calendar dependencies and select the first 
     * enabled date
     * 
     * @param options 
     * @param dayGenerator 
     * @param dayChecker 
     * @param dateControl 
     * @param dateGrabber 
     * @param addonManager 
     * @param actions 
     * @param events 
     */
    constructor(options: CalendarOptions, dayGenerator: iDayGenerator, dayChecker: iDayChecker, dateControl: iDateControl, dateGrabber: iDateGrabber, addonManager: iAddonManager, actions: iAction, events: iCalendarEvents) {

        super();
        this.options = options;
        this.dayGenerator = dayGenerator;
        this.dayChecker = dayChecker;
        this.dateControl = dateControl;
        this.dateGrabber = dateGrabber;
        this.addonManager = addonManager;
        this.action = actions;
        this.events = events;

    }

}
