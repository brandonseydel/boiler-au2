import { DI } from 'aurelia';
export interface IState extends State { }
export const IState = DI.createInterface<IState>();
export class State {
    public someStateSterf = 'asdfafsd';
    public authenticated = false;
}
