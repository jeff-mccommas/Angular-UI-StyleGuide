import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class ApplicationService {    
    selectedAppKey = "styleguide_selectedApp";
    constructor(private _baConfig: BaThemeConfigProvider) {
    }

    setSelectedApp = function (data) {
        if (data) {
            localStorage.setItem(this.selectedAppKey, JSON.stringify(data));
        }
    };

    getSelectedApp = function () {
        return JSON.parse(localStorage.getItem(this.selectedAppKey));
    };

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
