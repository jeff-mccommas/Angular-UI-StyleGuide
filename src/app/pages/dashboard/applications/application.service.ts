import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class ApplicationService {

    constructor(private _baConfig: BaThemeConfigProvider) {
    }

    getApplications() {
        return [
            {
                "key": "configui",
                "name": "ConfigUI",
                "icon": "touch-screen"
            },
            {
                "key": "applicant-gateway",
                "name": "Applicant Gateway",
                "icon": "coffee" 
            },
            {
                "key": "evaluator",
                "name": "Evaluator",
                "icon": "idea" 
            },
            {
                "key": "applicant-ux",
                "name": "Applicant UX",
                "icon": "settings" 
            }
        ];
    }
}
