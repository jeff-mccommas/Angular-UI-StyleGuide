import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {GlobalState} from '../../../global.state';
import {ApplicationService} from './application.service';

@Component({
  selector: 'applications',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./application.scss')],
  template: require('./application.html')
})
export class Applications {
  public applications: Array<Object>;
  selectedApp;
  constructor(private _applicationService: ApplicationService, private _router: Router, private _state: GlobalState) {
    this.applications = this._applicationService.getApplications();
    this.selectedApp = this.applications[0];
    this._applicationService.setSelectedApp(this.selectedApp);
  }
  ngAfterViewInit() {
  }

  navigatetoApp(app) {
    this.selectedApp = app;
    this._applicationService.setSelectedApp(app);
    this._state.notifyDataChanged('application.selected', this.selectedApp);
  }

}
