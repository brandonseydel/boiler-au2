import { bindable, customAttribute, ICustomAttributeViewModel } from "aurelia";

@customAttribute("tooltip")
export class Tooltip implements ICustomAttributeViewModel {
    @bindable({ primary: true }) value: string;

    constructor(private element: Element) { }

    /**
     * if ANY bound/observed property changes this is called
     */
    propertChanged(name: string, value: unknown) { console.log(name, value); }


    valueChanged(newValue: string, oldValue: string) {
        console.log('from', oldValue, 'to', newValue);
    }

}