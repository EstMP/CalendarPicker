class DayAvailabilityData implements iDayModData {

    private data: number = 0;

    setData(data: number): void {
        this.data = data;
    }
    getData(): number {
        return this.data;
    }
}