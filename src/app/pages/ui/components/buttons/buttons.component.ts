import {Component, ViewEncapsulation} from '@angular/core';
import {CollapseDirective} from 'ng2-bootstrap/components/collapse';
import {BaCard} from '../../../../theme/components';
import {ApplicationService} from './../../../dashboard/applications/application.service';
import {ConfigUiTextButtons} from './components/configui/textButtons';
import {ConfigUiFlatButtons} from './components/configui/flatButtons';
import {ConfigUiGroupButtons} from './components/configui/groupButtons';
import {ConfigUiButtonStates} from './components/configui/buttonStates';
import {ApplicantUxButtonStates} from './components/applicant-ux/buttonStates';
import {ApplicantUxTextButtons} from './components/applicant-ux/textButtons';
import {ApplicantUxFlatButtons} from './components/applicant-ux/flatButtons';
import {ApplicantUxGroupButtons} from './components/applicant-ux/groupButtons';
import {HttpService} from './../../../../shared/services/http.service';

@Component({
  selector: 'buttons',
  encapsulation: ViewEncapsulation.None,
  directives: [
    BaCard,
    ConfigUiTextButtons,
    ConfigUiFlatButtons,
    ConfigUiGroupButtons,
    ConfigUiButtonStates,
    ApplicantUxButtonStates,
    ApplicantUxFlatButtons,
    ApplicantUxTextButtons,
    ApplicantUxGroupButtons,
    CollapseDirective
  ],
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
