class Day {

    private date: Date;
    private current: boolean;
    private disabled: boolean;
    private today: boolean;
    private availability: number = NaN;
    private mods: Record<string, any> = {};

    constructor(date: Date, current: boolean, disable: boolean, today: boolean) {

        this.date = date;
        this.current = current;
        this.disabled = disable;
        this.today = today;

    }

    public getDate(): Date {

        return this.date;

    }

    public getDay() {

        return this.date.getDate();

    }

    public isCurrent() {

        return this.current;

    }

    public isDisabled(): boolean {

        return this.disabled;

    }

    public setDisabled(value: boolean): void {

        this.disabled = value;

    }

    public isToday(): boolean {

        return this.today;

    }

    public getavailability(): number {

        return this.availability;

    }

    public setAvailability(value: number): void {

        this.availability = value;

    }

    public toString(): string {

        return this.date.toString();

    }
}
