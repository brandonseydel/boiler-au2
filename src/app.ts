import { ICustomElementViewModel, IEventAggregator, ILogger } from 'aurelia';
export class App implements ICustomElementViewModel {

    constructor(
        @ILogger private readonly logger: ILogger,
        @IEventAggregator private readonly eventAggregator: IEventAggregator) {
        this.logger = this.logger.scopeTo(App.name);
        this.attachEvents();
    }

    attached() {
        this.logger.debug(App, 'attached')
    }


    attachEvents() {
        this.eventAggregator.subscribe('attached', () => {
            this.logger.debug('Attached')
        })
    }

    /**
     * Clean up shit here
     */
    dispose() { }

}



