import {Injectable} from '@angular/core';

@Injectable()
export class ConstantService {
    localEnvironment:boolean = true;
    apiUrl: string = this.localEnvironment ? 'http://localhost:8181/' : '';
    requestApi = { login: 'login', register: 'register' }; 
    getRequestUrl = function (action) {
        return this.apiUrl + this.requestApi[action];
    };
}