import {Component, ViewEncapsulation} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common'; 
import { TAB_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'evaluator',
  encapsulation: ViewEncapsulation.None,
  directives: [CORE_DIRECTIVES, TAB_DIRECTIVES],
  providers: [],
  styles: [require('./evaluator.scss')],
  template: require('./evaluator.html')
})
export class Evaluator { 
  constructor() {}  
}
