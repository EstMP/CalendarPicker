class CalendarOptionsNotes {

    private enabled: boolean;
    private default: Array<NoteType>;
    private values: [Date, [string, string, boolean][]][];

    constructor(notes: Partial<OptionsNotesType> = <OptionsNotesType>{}) {

        this.enabled = notes.enabled || false;
        this.default = notes.default || [];
        this.values = notes.values ? DateHelper.strNotesToDateNotes(notes.values) : [];

    }

    public isEnabled(): boolean {

        return this.enabled;

    }

    public getValues(): [Date, [string, string, boolean][]][] {

        return this.values;

    }

    public getDefault(): Array<NoteType> {

        return this.default;

    }

    public setValues(notes: [string, [string, string, boolean][]][]): void {

        this.values = DateHelper.strNotesToDateNotes(notes);

    }

}