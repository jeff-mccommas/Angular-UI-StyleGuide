import {Injectable} from '@angular/core';

@Injectable()
export class ConstantService {
    getEnvironment = function () {
        var HostName = window.location.hostname;
        if (HostName !== "localhost" && HostName !== "127.0.0.1") {
            //Its not localEnvironment
            return false;
        } else {
            //It is localEnvironment
            return true;
        }
    };
    localEnvironment: boolean = this.getEnvironment();
    apiUrl: string = this.localEnvironment ? 'http://localhost:8181/' : '';
    requestApi = { login: 'login', register: 'register' };
    getRequestUrl = function (action) {
        return this.apiUrl + this.requestApi[action];
    };
}