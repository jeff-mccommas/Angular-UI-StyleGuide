import {Component, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'configUi',
  encapsulation: ViewEncapsulation.None, 
  providers: [],
  styles: [require('./configUi.scss')],
  template: require('./configUi.html')
})
export class ConfigUi {
  constructor() {}
}

