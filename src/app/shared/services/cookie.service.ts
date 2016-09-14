import {Injectable} from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class CookieService {
    prefix = "styleguide_";
    tokenKey = "token";
    userIdKey = "userid";
    setTokenAndUserId = function (data) {
        Cookie.set(this.prefix + this.tokenKey, data.token);
        Cookie.set(this.prefix + this.userIdKey, data._id);
    };
    deleteTokenAndUserId = function () {
        Cookie.delete(this.prefix + this.tokenKey);
        Cookie.delete(this.prefix + this.userIdKey);
    };
    setCookie = function (cookieKey, cookieValue) {
        Cookie.set(this.prefix + cookieKey, cookieValue);
    };
    getCookie = function (cookieKey, cookieValue) {
        return Cookie.get(this.prefix + cookieKey);
    };
    deleteCookie = function (cookieKey) {
        Cookie.delete(this.prefix + cookieKey);
    };
}
