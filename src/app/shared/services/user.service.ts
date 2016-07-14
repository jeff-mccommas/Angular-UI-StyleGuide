import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
    userdataKey = "styleguide_user";
    setUser = function (userdata) {
        if (userdata) {
            localStorage.setItem(this.userdataKey, JSON.stringify(userdata));
        }
    }
    getUser = function () {
        return JSON.parse(localStorage.getItem(this.userdataKey));
    }
    removeUser = function () {
        return localStorage.removeItem(this.userdataKey);
    } 
}