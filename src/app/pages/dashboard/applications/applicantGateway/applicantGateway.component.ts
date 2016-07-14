import {Component, ViewEncapsulation} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common'; 
import { TAB_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'applicantGateway',
  encapsulation: ViewEncapsulation.None,
  directives: [CORE_DIRECTIVES, TAB_DIRECTIVES],
  providers: [],
  styles: [require('./applicantGateway.scss')],
  template: require('./applicantGateway.html')
})
export class ApplicantGateway { 
  constructor() {}  
}
