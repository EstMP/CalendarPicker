class CalendarEvents implements iCalendarEvents {

    public changeMonthEvent(calendar: Calendar, type: string): void {

        console.log('changeMonthEvent');

        if (type === 'scheduler.previous.month' || type === 'calendar.prev.month') {
            calendar.dateControl.setPrevMonth();
        } else {            
            calendar.dateControl.setNextMonth();
        }

        if (calendar.options.changeMonthEvent.toString() !== "function () { }") {

            calendar.addonManager.updateMonth();

            calendar.options.changeMonthEvent(
                calendar.options.getDate(),
                calendar.options,
                this.changeMonthEventCallback.bind(this, calendar, type)
            );

        } else {

            this.firstLastDayEvent(type, calendar);

        }

    }

    public changeDayEvent(calendar: Calendar, date: Date): void {

        console.log('changeDayEvent');

        if (date !== INVALID_DATE) {

            calendar.dateControl.setDay(date);

            if (calendar.options.clickDayEvent.toString() !== "function () { }") {

                calendar.options.clickDayEvent(
                    date,
                    calendar.options,
                    calendar.addonManager.updateDay.bind(calendar.addonManager));

            }

        }

        calendar.addonManager.updateDay();
        calendar.notify();

    }

    public changeMonthEventCallback(calendar: Calendar, type: string, values: [string, number][]): void {

        //calendar.options.getavailability().setValues(values);
        this.firstLastDayEvent(type, calendar)

    }


    /**
     * Select the first/last date of the visible month
     * depending on the type
     * 
     * @param type 
     */
     public firstLastDayEvent(type: string, calendar: Calendar): Date {

        console.log(type);

        calendar.options.setSelectedDate(INVALID_DATE);
        calendar.dayGenerator.generate();

        const date = calendar.dateGrabber.getFirstLastEnabledDate(
            calendar.dayGenerator.getDays(), type);

        calendar.events.changeDayEvent(calendar, date);

        return date;

    }


}