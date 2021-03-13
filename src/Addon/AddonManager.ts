class AddonManager implements iAddonManager {

    private addons: iAddon[] = [];

    constructor() {

    }

    public add(addon: iAddon): void {

        this.addons.push(addon);

    }

    public updateDay(): void {

        this.addons.forEach(addon => {
            addon.onUpdateDay()
        });

    }

    public updateMonth(): void {

        this.addons.forEach(addon => {
            addon.onUpdateMonth()
        });

    }

}