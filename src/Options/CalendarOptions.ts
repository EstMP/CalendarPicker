class CalendarOptions {

    private target: string;
    private date: Date;
    private selectedDate: Date;
    private autoSelect: boolean;
    public clickDayEvent: Function;
    public changeMonthEvent: Function;
    private disable: CalendarOptionsDisabled;
    private availability: CalendarOptionsavailability;
    private scheduler: CalendarOptionsScheduler;

    constructor(options: Partial<OptionsType> = <OptionsType>{}) {

        this.target = options.target || "calendar";
        this.date = options.date ? DateHelper.strToDate(options.date) : DateHelper.getTodayDate();
        this.selectedDate = INVALID_DATE;
        this.autoSelect = options.autoSelect || false;
        this.clickDayEvent = options.clickDayEvent || (() => { });
        this.changeMonthEvent = options.changeMonthEvent || (() => { });
        this.disable = new CalendarOptionsDisabled(options.disable);
        this.availability = new CalendarOptionsavailability(options.availability);
        this.scheduler = new CalendarOptionsScheduler(options.scheduler);

    }

    public getTarget(): string {

        return this.target;

    }

    public getDate(): Date {

        return this.date;

    }

    public setDate(date: Date): void {

        this.date = date;

    }

    public getSelectedDate(): Date {

        return this.selectedDate;

    }
    public setSelectedDate(value: Date) {

        this.selectedDate = value;

    }

    public getAutoSelect(): boolean {

        return this.autoSelect;

    }

    public getDisable(): CalendarOptionsDisabled {

        return this.disable;

    }

    public getavailability(): CalendarOptionsavailability {

        return this.availability;

    }

    public getScheduler(): CalendarOptionsScheduler {

        return this.scheduler;

    }

}
