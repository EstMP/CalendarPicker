class DateHelper {

    static getTodayDate(): Date {

        const date = new Date();
        date.setHours(0, 0, 0, 0);

        return date;

    }

    static getFirstDayOfTheWeek(date: Date): number {

        return new Date(date.getFullYear(), date.getMonth()).getDay() || 7;

    }

    static findDate(dates: Date[], date: Date): boolean {

        const find = dates.filter((d) => {
            return d.getTime() === date.getTime();
        });

        return find.length > 0;
    }

    /**
     * Returns true if number exists in numbers
     * 
     * @param numbers number[]
     * @param number number
     */
    static findNumber(numbers: number[], number: number): boolean {

        return numbers.indexOf(number) !== -1;

    }

    static strToDate(date: string): Date {

        const _date = new Date(date);
        _date.setHours(0, 0, 0, 0);

        return _date;

    }

    static strsToDates(dates: string[]): Date[] {

        const _dates: Date[] = dates.map((e) => {
            const date = new Date(e);
            date.setHours(0, 0, 0, 0);
            return date;
        });

        return _dates;

    }

    static strAnyToDateAny(availability: [string, any][]): [Date, any][] {

        const _availability: [Date, any][] = availability.map((e) => {
            const date = new Date(e[0]);
            date.setHours(0, 0, 0, 0);
            return [date, e[1]]
        })

        return _availability;

    }

    /**
     * Returns Date array from time string array
     * 
     * @param times 
     * @param date 
     */
    static timesToDates(times: string[], date: Date): Date[] {

        const _dates = times.map((time) => {
            const dt = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            const [hour, minute, second] = time.split(':');
            dt.setHours(+hour, +minute, +second);

            return dt;
        })

        return _dates;

    }

}