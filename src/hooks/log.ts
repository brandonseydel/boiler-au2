import { ILogger, lifecycleHooks } from "aurelia";

@lifecycleHooks()
export class LogHook {

    constructor(@ILogger private readonly logger: ILogger) { }

    attached() {
        this.logger.debug(this, 'attached');
    }

    detaching() {
        this.logger.debug(this, 'detaching');
    }

}