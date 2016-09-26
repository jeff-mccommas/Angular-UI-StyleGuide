import {Component, ViewEncapsulation} from '@angular/core'; 

@Component({
  selector: 'applicantUx',
  encapsulation: ViewEncapsulation.None, 
  styles: [require('./applicantUx.scss')],
  template: require('./applicantUx.html')
})
export class ApplicantUx { 
  constructor() {}  
}
