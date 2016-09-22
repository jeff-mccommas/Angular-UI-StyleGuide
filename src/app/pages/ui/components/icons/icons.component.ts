import { Component, ViewEncapsulation } from '@angular/core';
import {ApplicationService} from './../../../dashboard/applications/application.service';
import { IconsService } from './icons.service';

@Component({
  selector: 'icons',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./icons.scss')], 
  template: require('./icons.html'),
})
export class Icons {
  selectedApp:any;
  configuiSpriteIconsHtml: string;
  applicantUxcasIconsHtml:string;
  fonticonshtml: string = require('./components/fontIcons/fontIcons.html');
  icons: any;

  constructor(private _applicationService: ApplicationService, private _iconsService: IconsService) {
    this.selectedApp = this._applicationService.getSelectedApp();
    switch (this.selectedApp.key) {
      case "configui":
        this.configuiSpriteIconsHtml = require('./components/configui/spriteIcons/spriteIcons.html');
        break;
      case "applicant-gateway":
        break;
      case "evaluator":
        break;
      case "applicant-ux":
        this.applicantUxcasIconsHtml = require('./components/applicant-ux/casIcons/casIcons.html');
        break;
    }
  }

  ngOnInit() {
    this.icons = this._iconsService.getAll();
  }
}
