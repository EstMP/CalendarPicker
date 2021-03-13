abstract class Observable implements iObservable {

    /**
     * @type {iObserver[]} List of subscribers. In real life, the list of
     * subscribers can be stored more comprehensively (categorized by event
     * type, etc.).
     */
    private observers: iObserver[] = [];

    /**
     * The subscription management methods.
     */
    public attach(observer: iObserver): void {
        const isExist = this.observers.indexOf(observer) !== -1;
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }

        //console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    }

    public detach(observer: iObserver): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }

        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    }

    /**
     * Trigger an update in each subscriber.
     */
    public notify(): void {
        //console.log('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

}
