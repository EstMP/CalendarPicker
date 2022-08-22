class DayNotesData implements iDayModData {

    private data: Array<DayNotesValuesType> = [];

    setData(data: any): void {
        this.data = data;
    }
    getData(): Array<DayNotesValuesType> {
        return this.data;
    }
}