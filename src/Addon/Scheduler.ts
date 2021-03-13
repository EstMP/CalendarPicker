class Scheduler extends Observable implements iAddon {

    public NO_SCHEDULES_MESSAGE = 'No hay un horario disponible';

    public calendarOptions: CalendarOptions;
    public schedulerOptions: CalendarOptionsScheduler;

    constructor(options: CalendarOptions) {

        super();
        this.calendarOptions = options;
        this.schedulerOptions = options.getScheduler();
        this.schedulerOptions.setDate(this.calendarOptions.getSelectedDate());

    }

    onUpdateDay(): void {

        const selectedDate = this.calendarOptions.getSelectedDate();

        if (selectedDate == INVALID_DATE) {
            this.schedulerOptions.setValues([]);            
        }


        this.notify();
        this.schedulerOptions.setDate(selectedDate);

    }

    onUpdateMonth() {

        //this.schedulerOptions.setValues([]);
        this.schedulerOptions.setDate(INVALID_DATE);
        this.notify();

    }

    /* 
            public clickTimeEvent(date: Date): void {
        
                if (this.schedulerOptions.clickTimeEvent.toString() !== "function () { }") {
        
                    this.schedulerOptions.clickTimeEvent(date);
        
                }
        
            }
     */
}