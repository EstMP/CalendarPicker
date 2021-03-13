class CalendarOptionsDisabled {

    private from: Date;
    private to: Date;
    private dates: Date[];
    private weekdays: number[];

    constructor(disabled: Partial<OptionsDisabledType> = <OptionsDisabledType>{}) {

        this.from = DateHelper.strToDate(disabled.from!);
        this.to = disabled.to ? DateHelper.strToDate(disabled.to) : DateHelper.getTodayDate();
        this.dates = disabled.dates ? DateHelper.strsToDates(disabled.dates) : [];
        this.weekdays = disabled.weekdays || [];

    }

    public getFrom(): Date {

        return this.from;

    }

    public getTo(): Date {

        return this.to;

    }

    public getDates(): Date[] {

        return this.dates;

    }

    public getWeekdays(): number[] {

        return this.weekdays;

    }

}
