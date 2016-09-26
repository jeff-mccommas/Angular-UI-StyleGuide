import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'evaluator',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./evaluator.scss')],
  template: require('./evaluator.html')
})
export class Evaluator { 
  constructor() {}  
}
