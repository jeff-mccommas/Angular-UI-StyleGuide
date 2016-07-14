import {Injectable} from '@angular/core'; 
import {ConstantService} from './../../shared/services/constant.service';
import {HttpService} from './../../shared/services/http.service';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService { 
    constructor(private httpService: HttpService, private constantService: ConstantService) {}
    signup = function (requestdata) {
        return this.httpService.http_post(this.constantService.requestApi.register,requestdata);
    };
}
