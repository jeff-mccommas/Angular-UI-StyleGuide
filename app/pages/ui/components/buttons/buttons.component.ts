import { Component, ViewEncapsulation } from '@angular/core';
import {ApplicationService} from './../../../dashboard/applications/application.service';

@Component({
  selector: 'buttons',
  encapsulation: ViewEncapsulation.None,
  providers: [ApplicationService],
  styles: [require('./buttons.scss')],
  template: require('./buttons.html'),
})
export class Buttons {
  selectedApp: any;
  textbuttonshtml: string;
  groupbuttonshtml: string;
  flatButtonshtml: string;
  stateButtonshtml: string;
  constructor(private _applicationService: ApplicationService) {
    this.selectedApp = this._applicationService.getSelectedApp();
    switch (this.selectedApp.key) {
      case "configui":
        this.textbuttonshtml = require('./components/configui/textButtons/textButtons.html');
        this.groupbuttonshtml = require('./components/configui/groupButtons/groupButtons.html');
        this.flatButtonshtml = require('./components/configui/flatButtons/flatButtons.html');
        this.stateButtonshtml = require('./components/configui/buttonStates/buttonStates.html');
        break;
      case "applicant-gateway":
        break;
      case "evaluator":
        break;
      case "applicant-ux":
        this.textbuttonshtml = require('./components/applicant-ux/textButtons/textButtons.html');
        this.groupbuttonshtml = require('./components/applicant-ux/groupButtons/groupButtons.html');
        this.flatButtonshtml = require('./components/applicant-ux/flatButtons/flatButtons.html');
        this.stateButtonshtml = require('./components/applicant-ux/buttonStates/buttonStates.html');
        break;
    }
  }
}
