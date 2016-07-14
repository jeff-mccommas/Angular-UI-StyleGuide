import {Component, ViewEncapsulation} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common'; 
import { TAB_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'applicantUx',
  encapsulation: ViewEncapsulation.None,
  directives: [CORE_DIRECTIVES, TAB_DIRECTIVES],
  providers: [],
  styles: [require('./applicantUx.scss')],
  template: require('./applicantUx.html')
})
export class ApplicantUx { 
  constructor() {}  
}
