import { valueConverter } from "aurelia";

const formatter = new Intl.DateTimeFormat();


@valueConverter("date")
export class DateValueConverter {
    constructor(/** any DI object can go in hurr */) {

    }

    /**
     * convert between Date in the viewmodel and a string in the specified format for the view.
     * Format can be a key into config.
     */
    public toView(value: string | number | Date): string | null {
        return formatter.format(new Date(value))
    }

    public fromView(value: string): Date | null {
        return new Date(value);
    }
}
