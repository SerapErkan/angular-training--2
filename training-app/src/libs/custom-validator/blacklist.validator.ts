import { FormControl } from "@angular/forms"

export const BlackListValidator = (letter: string) => {
    return (control: FormControl) => {
        return control.value.indexOf(letter) > -1 ? {blacklist:true}
            : null;
    };
};