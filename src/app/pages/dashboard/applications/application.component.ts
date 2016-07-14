import {Component, ViewEncapsulation} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {Router} from '@angular/router';
import { TAB_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import {BaCard} from '../../../theme/components';
import {AppState} from '../../../app.state';
import {ApplicationService} from './application.service'; 
import {ConfigUi} from './configui/configUi.component'; 
import {ApplicantGateway} from './applicantGateway/applicantGateway.component'; 
import {ApplicantUx} from './applicantUx/applicantUx.component'; 
import {Evaluator} from './evaluator/evaluator.component'; 

@Component({
  selector: 'applications',
  encapsulation: ViewEncapsulation.None,
  directives: [CORE_DIRECTIVES, TAB_DIRECTIVES, BaCard, ConfigUi, ApplicantGateway, ApplicantUx, Evaluator],
  providers: [ApplicationService],
  styles: [require('./application.scss')],
  template: require('./application.html')
})
export class Applications {
  public applications: Array<Object>;
  selectedApp; 
  constructor(private _applicationService: ApplicationService, private _router: Router, private _state: AppState) {
    this.applications = this._applicationService.getApplications();
    this.selectedApp = this.applications[0]; 
  } 
  ngAfterViewInit() {
  }

  navigatetoApp(app) {
    this.selectedApp = app;  
    this._state.notifyDataChanged('application.selected', this.selectedApp);
  }

}
