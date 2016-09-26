import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';
import {Router} from '@angular/router'; 
import {RegisterService} from  './register.service';
import {ConstantService} from './../../shared/services/constant.service';
import {HttpService} from './../../shared/services/http.service';
import {UserService} from './../../shared/services/user.service';
import {CookieService} from './../../shared/services/cookie.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'register',
  encapsulation: ViewEncapsulation.None,
  providers: [RegisterService, CookieService, ConstantService, HttpService, UserService],
  styles: [require('./register.scss')],
  template: require('./register.html'),
})
export class Register {

  public form:FormGroup;
  public name:AbstractControl;
  public email:AbstractControl;
  public password:AbstractControl;
  public repeatPassword:AbstractControl;
  public passwords:FormGroup;

  public submitted:boolean = false;

  constructor(fb: FormBuilder, private _router: Router, private registerService: RegisterService, private cookieService: CookieService, private userService: UserService) {

    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
    });

    this.name = this.form.controls['name'];
    this.email = this.form.controls['email'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
  }

  public onSubmit(values: any): void {
    this.submitted = true;
    if (this.form.valid) {
      this.registerService.signup({
        "name": values.name,
        "email": values.email,
        "password": values.passwords.password,
        "confirmPassword": values.passwords.repeatPassword
      }).map(r => r.json())
        .subscribe(data => {
          if (data.success) {
            //If login is successfull then set token and userid in cookie
            this.cookieService.setTokenAndUserId(data.user);
            this.userService.setUser(data.user);
            //Redirect to Dashboard screen
            this._router.navigate(['pages/dashboard']);
          } else {
            //If login fails then show data message
            alert(data.message);
          }
        });
    }
  }
}
