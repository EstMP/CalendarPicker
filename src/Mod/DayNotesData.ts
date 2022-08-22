class DayNotesData implements iDayModData {

    private data: string = '';
    private type: string = ''

    setData(data: any): void {
        this.data = data;
    }
    getData(): string {
        return this.data;
    }
    setType(type: string): void {
        this.type = type;
    }
    getType(): string {
        return this.type;
    }
}