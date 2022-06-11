import { Welcome } from './../pages/welcome/welcome';
import { IState } from 'common';
import { Constructable, lifecycleHooks } from 'aurelia';
import { Parameters, RoutingInstruction, Navigation, IRouter } from '@aurelia/router';

@lifecycleHooks()
export class AuthHook {

    /**
     * 
     * @param state some form of application state
     */
    constructor(@IState private readonly state: IState,
        @IRouter private readonly router: IRouter) {
    }

    /**
     * Implement a hook to check auth status here and return false if not allowed, a viewmodel to route to,  text to display, or a redirect
     * @param viewModel 
     * @param params 
     * @param instruction 
     * @param navigation 
     * @returns 
     */
    canLoad(viewModel: Constructable, params: Parameters, instruction: RoutingInstruction, navigation: Navigation) {
        // you can do something like below to redirect
        if (!this.state.authenticated) return 'welcome';
        return true;
    }
}