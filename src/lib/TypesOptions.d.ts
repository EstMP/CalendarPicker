type OptionsType = {
    target: string,
    type: string,
    date: string,
    autoSelect: boolean,
    clickDayEvent: Function,
    changeMonthEvent: Function,
    disable: OptionsDisabledType,
    availability: OptionsavailabilityType,
    notes: OptionsNotesType,
    scheduler: OptionsSchedulerType
}

type OptionsDisabledType = {
    from: string,
    to: string,
    dates: string[],
    weekdays: number[]
}

type OptionsavailabilityType = {
    enabled: boolean,
    default: number,
    values: [string, number][]
}

type OptionsSchedulerType = {
    enabled: boolean,
    target: string,
    date: Date,
    from: string,
    to: string,
    interval: number,
    values: string[],
    clickTimeEvent: Function
}

type OptionsNotesType = {
    enabled: boolean,
    default: string,
    values: [string, string][]
}
