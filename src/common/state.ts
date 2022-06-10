import { DI } from 'aurelia';
export type IState = typeof State;
export const IState = DI.createInterface<IState>();
export class State {
    public someStateSterf = 'asdfafsd';
}
