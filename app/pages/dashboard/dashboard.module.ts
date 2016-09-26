import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

import { Applications } from './applications';
import {ConfigUi} from './applications/configui/configUi.component';
import {ApplicantGateway} from './applications/applicantGateway/applicantGateway.component';
import {ApplicantUx} from './applications/applicantUx/applicantUx.component';
import {Evaluator} from './applications/evaluator/evaluator.component';
import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';
import {ApplicationService} from './applications/application.service';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    NgaModule,
    routing,
    TabsModule
  ],
  declarations: [
    Applications, 
    ConfigUi,
    ApplicantGateway,
    ApplicantUx,
    Evaluator,
    Dashboard
  ],
  providers: [
    ApplicationService
  ]
})
export default class DashboardModule {}
