class CalendarOptionsavailability {

    private enabled: boolean;
    private default: number;
    private values: [Date, number][];

    constructor(availability: Partial<OptionsavailabilityType> = <OptionsavailabilityType>{}) {

        this.enabled = availability.enabled || false;
        this.default = availability.default || 0;
        this.values = availability.values ? DateHelper.strAnyToDateAny(availability.values) : [];

    }

    public isEnabled(): boolean {

        return this.enabled;

    }

    public getValues(): [Date, number][] {

        return this.values;

    }

    public getDefault(): number {

        return this.default;

    }

    public setValues(availability: [string, number][]): void {

        this.values = DateHelper.strAnyToDateAny(availability);

    }

}