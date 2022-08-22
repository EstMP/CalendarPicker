class DayMods {

    private mods: iDayMod[];

    constructor(mods: iDayMod[] = []) {

        this.mods = mods;

    }

    add(mod: iDayMod): void {

        this.mods.push(mod);

    }

    apply(day: Day) {

        this.mods.forEach(mod => {
            mod.modificator(day)
        });

    }

}