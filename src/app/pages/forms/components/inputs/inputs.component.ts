import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'inputs',
  encapsulation: ViewEncapsulation.None,
  template: require('./inputs.html'),
})
export class Inputs {
  standardInputsHtml:string = require('./components/standardInputs/standardInputs.html');
  validationInputsHtml:string = require('./components/validationInputs/validationInputs.html');
  checkboxInputsHtml:string = require('./components/checkboxInputs/checkboxInputs.html');
  constructor() {
  }
}
