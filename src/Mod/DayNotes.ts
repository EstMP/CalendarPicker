class DayNotes implements iDayMod {

    private options: CalendarOptionsNotes;

    constructor(options: CalendarOptionsNotes) {

        this.options = options;

    }

    public getData(day: Day): void {

        const find = this.options.getValues().filter((currentValue) => {
            return currentValue[0].getTime() === day.getDate().getTime();
        });

        if (find.length == 0) {
            const defaultVal = this.options.getDefault();
            day.setNotes(defaultVal);
        }

        if (find[0]) {
            if (find[0][0]) {
                day.setNotes(find[0][1]);

            }
        }

        if (day.getNotes() !== '') {
            //day.setDisabled(true);
        }

    }

}