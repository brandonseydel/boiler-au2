import { IState, State } from './common/state';
import { LogHook } from './hooks/log';
import { App } from './app';
import { RouterConfiguration } from '@aurelia/router';
import Aurelia, { DI, Registration } /*, { StyleConfiguration }*/ from 'aurelia';

import * as resources from './resources';
import { AuthHook } from './hooks/auth';

const state = new State();
// just for example you can switch to false to see redirect in hook
state.authenticated = true;

// Css files imported in this main file are NOT processed by style-loader
// They are for sharedStyles in shadowDOM.
// However, css files imported in other js/ts files are processed by style-loader.
// import shared from './shared.scss';

Aurelia
  /*
  .register(StyleConfiguration.shadowDOM({
    // optionally add the shared styles for all components
    sharedStyles: [shared]
  }))
  */
  .register(RouterConfiguration.customize({
    useDirectRouting: true,
    basePath: '/',
    useUrlFragmentHash: false
  }))
  .register(Registration.instance(IState, state))
  .register(resources)
  .register(AuthHook)
  .register(LogHook)
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
  // .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(App)
  .start();



