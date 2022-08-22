class CalendarOptionsNotes {

    private enabled: boolean;
    private default: Array<DayNotesValuesType>;
    private values: [Date, Array<DayNotesValuesType>][];

    constructor(notes: Partial<OptionsNotesType> = <OptionsNotesType>{}) {

        this.enabled = notes.enabled || false;
        this.default = notes.default || [];
        this.values = notes.values ? DateHelper.strAnyToDateAny(notes.values) : [];

    }

    public isEnabled(): boolean {

        return this.enabled;

    }

    public getValues(): [Date, Array<DayNotesValuesType>][] {

        return this.values;

    }

    public getDefault(): Array<DayNotesValuesType> {

        return this.default;

    }

    public setValues(notes: [string, Array<DayNotesValuesType>][]): void {

        this.values = DateHelper.strAnyToDateAny(notes);

    }

}