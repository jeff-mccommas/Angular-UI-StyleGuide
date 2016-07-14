import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HTTP_BINDINGS} from '@angular/http';
import {LoginService} from  './login.service';
import {HttpService} from './../../shared/services/http.service';
import {ConstantService} from './../../shared/services/constant.service';
import {UserService} from './../../shared/services/user.service';
import {CookieService} from './../../shared/services/cookie.service';

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  directives: [],
	providers: [HTTP_BINDINGS, LoginService, CookieService, ConstantService, HttpService, UserService],
  styles: [require('./login.scss')],
  template: require('./login.html'),
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  constructor(fb:FormBuilder, private _router: Router, private loginService: LoginService, private cookieService: CookieService, private userService: UserService) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values:any):void {
    this.submitted = true;
    if (this.form.valid) { 
      this.loginService.login( {
        "email":  values.email,
        "password": values.password 
    }).map(r => r.json())
				.subscribe(data => { 
					if (data.success) {
						//If login is successfull then set token and userid in cookie : temp
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
