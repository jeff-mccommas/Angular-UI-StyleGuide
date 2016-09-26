import {Component, ViewEncapsulation} from '@angular/core'; 

@Component({
  selector: 'applicantGateway',
  encapsulation: ViewEncapsulation.None, 
  styles: [require('./applicantGateway.scss')],
  template: require('./applicantGateway.html')
})
export class ApplicantGateway { 
  constructor() {}  
}
