interface iObservable {

    attach(observer: iObserver): void;
    detach(observer: iObserver): void;
    notify(e: Event): void;

}

interface iObserver {

    update(subject: iObservable): void;

}

interface iAddonManager {

    add(addon: iAddon): void;
    updateDay(): void;
    updateMonth(): void
}

interface iAddon {

    onUpdateDay(): void;
    onUpdateMonth(): void;

}

interface iDateControl {

    setPrevMonth(type: string): void;
    setPrevMonth(): void;
    setNextMonth(): void;
    setDay(date: Date): void;

}

interface iAction {

    prevMonthAction: PreviousMonthAction;
    nextMonthAction: NextMonthAction;
    prevDayAction: PreviousDayAction;
    nextDayAction: NextDayAction;

}

interface iDayChecker {

    thereIsPrevDay(date: Date, disableTo: Date, calendar: Array<Day>): boolean;
    thereIsNextDay(date: Date, disabledFrom: Date, calendar: Array<Day>): boolean;
    thereIsPrevMonthEnabled(date: Date, getTo: Date): boolean;
    thereIsNextMonthEnabled(date: Date, disableFrom: Date): boolean;

}

interface iDateGrabber {

    getFirstLastEnabledDate(calendar: Day[], type: string): Date;
    getNextEnabledDate(calendar: Day[], date: Date): Date;
    getPrevEnabledDate(calendar: Day[], date: Date): Date;

}

interface iCalendarEvents {

    changeMonthEvent(calendar: Calendar, type: string): void;
    changeDayEvent(calendar: Calendar, date: Date): void;

}

interface iDayGenerator {

    generate(): void;
    getDays(): Array<Day>;

}

interface iDay {

}

interface iDayMod {
    modificator(day: Day): void;
}

interface iDayModData {
    getData(data: any): void;
}
