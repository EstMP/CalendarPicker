class CalendarOptionsNotes {

    private enabled: boolean;
    private default: string;
    private values: [Date, string][];

    constructor(notes: Partial<OptionsNotesType> = <OptionsNotesType>{}) {

        this.enabled = notes.enabled || false;
        this.default = notes.default || '';
        this.values = notes.values ? DateHelper.strAnyToDateAny(notes.values) : [];

    }

    public isEnabled(): boolean {

        return this.enabled;

    }

    public getValues(): [Date, string][] {

        return this.values;

    }

    public getDefault(): string {

        return this.default;

    }

    public setValues(notes: [string, string][]): void {

        this.values = DateHelper.strAnyToDateAny(notes);

    }

}