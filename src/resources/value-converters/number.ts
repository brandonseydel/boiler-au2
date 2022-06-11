import { ValueConverterInstance } from "@aurelia/runtime";

/**
 * Convention based value converter
 */
export class NumberValueConverter implements ValueConverterInstance {
    toView(input: number, ...args: unknown[]): unknown {
        return input;
    }
    fromView?(input: string, ...args: unknown[]): unknown {
        return Number(input);
    }
}