class DayNotes implements iDayMod {

    private options: CalendarOptionsNotes;

    constructor(options: CalendarOptionsNotes) {

        this.options = options;

    }

    public modificator(day: Day): void {

        let value = '';

        const find = this.options.getValues().filter((currentValue) => {
            return currentValue[0].getTime() === day.getDate().getTime();
        });

        if (find.length == 0) {
            const defaultVal = this.options.getDefault();
            value = (defaultVal);
        }

        if (find[0]) {
            if (find[0][0]) {
                value = (find[0][1]);
            }
        }

        let data = new DayNotesData();
        data.setData(value);
        day.addModData(data);

    }

}