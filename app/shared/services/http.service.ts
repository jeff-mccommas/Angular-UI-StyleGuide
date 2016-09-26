import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {ConstantService} from './constant.service';

@Injectable()
export class HttpService { 
    constructor(private http: Http, private constantService: ConstantService) {}
    http_post = function (action, requestdata) {
        let header = new Headers();
        header.append("Content-Type", "application/json"); 
        return this.http.post(this.constantService.getRequestUrl(action), JSON.stringify(requestdata), {
            headers: header
        });
    };
}
