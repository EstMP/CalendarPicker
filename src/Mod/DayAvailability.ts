class DayAvailability implements iDayMod {

    private options: CalendarOptionsavailability;

    constructor(options: CalendarOptionsavailability) {

        this.options = options;

    }

    public modificator(day: Day): void {

        let value = 0;

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

        if (value == 0) {
            day.setDisabled(true);
        }

        let data = new DayAvailabilityData();
        data.setData(value);
        day.addModData(data);

    }

}