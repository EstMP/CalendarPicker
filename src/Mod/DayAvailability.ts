class DayAvailability implements iDayMod {

    private options: CalendarOptionsavailability;

    constructor(options: CalendarOptionsavailability) {

        this.options = options;

    }

    public getData(day: Day): void {

        const find = this.options.getValues().filter((currentValue) => {
            return currentValue[0].getTime() === day.getDate().getTime();
        });
        
        if (find.length == 0) {
            const defaultVal = this.options.getDefault();
            day.setAvailability(defaultVal);
        } 

        if (find[0]) {
            if (find[0][0]) {
                day.setAvailability(find[0][1]);

            }
        }

        if (day.getavailability() == 0) {            
            day.setDisabled(true);
        }

    }

}