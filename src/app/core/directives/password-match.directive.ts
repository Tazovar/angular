import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[appPasswordMatch]',
    providers:[
        {
            provide:NG_VALIDATORS,
            useExisting:PasswordMatchDirective,
            multi:true
        }
    ]
})

export class PasswordMatchDirective implements Validator{


    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        let password = control.get('password')
        let Confirmpassword = control.get('Confirmpassword')
let error = {appPasswordMatch:{mismatch:true}}
        if(password?.value == Confirmpassword?.value){
            return null
        }

        Confirmpassword?.setErrors(error)

        return error
    }
}