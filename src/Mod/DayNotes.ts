class DayNotes implements iDayMod {

    private options: CalendarOptionsNotes;

    constructor(options: CalendarOptionsNotes) {

        this.options = options;

    }

    public modificator(day: Day): void {

        let value: Array<NoteType> = [{ type: '', text: '', enabled: false }];

        const find = this.options.getValues().filter((currentValue) => {
            return currentValue[0].getTime() === day.getDate().getTime();
        });

        if (find.length == 0) {
            value = this.options.getDefault();
        }

        if (find[0]) {
            if (find[0][0]) {
                const dataTotype = find.map((note, i) => {

                    var data: NoteType[] = []

                    for (let i = 0; i < note[1].length; i++) {
                        data.push(
                            {
                                type: note[1][i][0],
                                text: note[1][i][1],
                                enabled: note[1][i][2]
                            })

                    }

                    return data;

                })

                value = dataTotype[0];

                /* if (data[0][2] == false) {
                    day.setDisabled(true);
                } */
            }

        }

        let data = new DayNotesData();
        data.setData(value);
        day.addModData(data);

    }

}