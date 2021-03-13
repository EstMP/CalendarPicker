class CalendarOptionsScheduler {

    private enabled: boolean;
    private target: string;
    private date: Date;
    private from: string;
    private to: string;
    private interval: number;
    private values: string[];
    public clickTimeEvent: Function;

    constructor(scheduler: Partial<OptionsSchedulerType> = {}) {

        this.enabled = scheduler.enabled || false;
        this.target = scheduler.target || 'scheduler';
        this.date = scheduler.date || INVALID_DATE;
        this.from = scheduler.from || '00:00:00';
        this.to = scheduler.to || '00:00:00';
        this.interval = scheduler.interval || 0;
        this.values = scheduler.values || [];
        this.clickTimeEvent = scheduler.clickTimeEvent || (() => {})

    }

    public getEnabled(): boolean {

        return this.enabled;

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

    public getFrom(): string {

        return this.from;

    }

    public getTo(): string {

        return this.to;

    }

    public getInterval(): number {

        return this.interval;

    }

    public getValues(): string[] {

        return this.values;

    }

    public setValues(values: string[]): void {

        this.values = values;

    }

}
