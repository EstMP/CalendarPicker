class Month {

    private date: Date;
    private current: boolean;
    private disabled: boolean;

    constructor(date: Date, current: boolean, disable: boolean) {

        this.date = date;
        this.current = current;
        this.disabled = disable;

    }

    public getDate(): Date {

        return this.date;

    }

    public isCurrent() {

        return this.current;

    }

    public isDisabled(): boolean {

        return this.disabled;

    }

    public setDisabled(value: boolean): void {

        this.disabled = value;

    }

    public getDays(): Array<Date> {

        var days = [];
        const _date = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
        const numDaysInMonth = new Date(_date.getFullYear(), _date.getMonth() + 1, 0).getDate();
        //console.log(numDaysInMonth);

        for (let index = 0; index < numDaysInMonth; index++) {

            days.push(new Date(_date.getFullYear(), _date.getMonth(), _date.getDate()));
            _date.setDate(_date.getDate() + 1)

        }

        //console.log(days);
        return days;
    }

    public toString(): string {

        return this.date.toString();

    }
}
