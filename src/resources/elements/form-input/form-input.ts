import { ICustomElementViewModel, customElement } from 'aurelia';
import { IState } from '../../../common/state';

@customElement({
  capture: true,
  name: 'form-input',
})
export class FormInput implements ICustomElementViewModel {
  constructor(@IState private readonly state: IState) {
    // you can inject the element or any DI in the constructor
  }
}
