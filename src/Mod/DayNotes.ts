type DayNotesValuesType = {
    type: string,
    note: string,
    disabled: boolean
}

class DayNotes implements iDayMod {

    private options: CalendarOptionsNotes;

    constructor(options: CalendarOptionsNotes) {

        this.options = options;

    }

    public modificator(day: Day): void {

        let value: Array<DayNotesValuesType> = [];

        const find = this.options.getValues().filter((currentValue) => {
            return currentValue[0].getTime() === day.getDate().getTime();
        });

        if (find.length == 0) {
            const defaultVal = this.options.getDefault();
            value = defaultVal;
        }

        if (find[0]) {
            if (find[0][0]) {
                const data: DayNotesValuesType[] = find[0][1];
                value = data;

                if (data[0].disabled) {
                    day.setDisabled(true);
                }
            }

        }

        let data = new DayNotesData();
        data.setData(value);
        day.addModData(data);

    }

}