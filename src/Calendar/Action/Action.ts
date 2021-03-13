class Action implements iAction{

    public prevMonthAction: PreviousMonthAction;
    public nextMonthAction: NextMonthAction;
    public prevDayAction: PreviousDayAction;
    public nextDayAction: NextDayAction;

    constructor() {

        this.prevMonthAction = new PreviousMonthAction();
        this.nextMonthAction = new NextMonthAction();
        this.prevDayAction = new PreviousDayAction();
        this.nextDayAction = new NextDayAction();

    }

}