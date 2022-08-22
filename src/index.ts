/// <reference path="./Calendar/Calendar.ts" />

const CLICK_EVENT_NOT_DEFFINED = 'Click event not deffined in { Options }';
const CHANGE_MONTH_EVENT_NOT_DEFFINED = 'Change month event not deffined in { Options }';
const CLICK_DAY_EVENT_ERROR = 'Click event is not a function';
const CONTAINER_NOT_FOUND = 'Calendar id not found';
const INVALID_DATE = new Date('Invalid Date');

const calendar = {
    init: (inputOptions: Partial<OptionsType> = {}) => {

        const options = new CalendarOptions(inputOptions);

        /**
         * DAY MODIFIERS
         */
        const dayMods = new DayMods();
        if (options.getavailability().isEnabled()) {
            const dayAvailability = new DayAvailability(options.getavailability());
            dayMods.add(dayAvailability);
        }
        if (options.getNotes().isEnabled()) {
            const dayNotes = new DayNotes(options.getNotes());
            dayMods.add(dayNotes);
        }

        /**
         * CONSTRUCT CALENDAR
         */
        const dayGenerator = options.getType() == 'month' ? new DayGenerator(options, dayMods) : new YearGenerator(options, dayMods);
        const dayChecker = new DayChecker();
        const dateControl = new DateControl(options);
        const dateGrabber = new DateGrabber();
        const addonManager = new AddonManager();
        const actions = new Action();
        const events = new CalendarEvents();

        const c = new Calendar(options, dayGenerator, dayChecker, dateControl, dateGrabber, addonManager, actions, events);

        const isEnabledDate = dayChecker.isDayEnabledByDate(dayGenerator.getDays(), options.getDate());
        if (isEnabledDate) {
            dateControl.setDay(options.getDate());
        } else {
            const date = dateGrabber.getFirstLastEnabledDate(
                dayGenerator.getDays(), 'calendar.init');
            if (date != INVALID_DATE) {
                dateControl.setDay(date);
            }
        }

        const calendarRenderObserver = new CalendarRender();
        c.attach(calendarRenderObserver);

        if (options.getScheduler().getEnabled()) {
            const scheduler = new Scheduler(options);
            const schedulerRenderObserver = new SchedulerRender();
            scheduler.attach(schedulerRenderObserver);

            c.addonManager.add(scheduler);
            c.addonManager.updateDay();
        }

        c.notify();

        calendar.options = options;
        calendar.refresh = c.notify.bind(c);

        // Disable calendar initialization
        calendar.init = () => { };

    },
    scheduler: {},
    options: {},
    refresh: {}
}
