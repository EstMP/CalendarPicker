type NoteType = {
    type: string,
    text: string,
    enabled: boolean
}

class DayNotesData implements iDayModData {

    private data: Array<NoteType> = [{type: '', text: '', enabled: false}];

    setData(data: Array<NoteType>): void {
        this.data = data;
    }
    getData(): Array<NoteType> {
        return this.data;
    }
}