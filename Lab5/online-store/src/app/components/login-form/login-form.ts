import {Component, signal} from '@angular/core';
import {LoginData} from "../../models/login-data";
import {form, FormField} from "@angular/forms/signals";

@Component({
  selector: 'app-login-form',
    imports: [
        FormField
    ],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
    loginModel = signal<LoginData>({
        username: '',
        email: '',
        password: '',
    })
    loginForm = form(this.loginModel)

    displayForm = () => {
        console.log(this.loginForm.username().value())
        console.log(this.loginForm.email().value())
        console.log(this.loginForm.password().value())
    }
}
