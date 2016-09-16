import {Component, ViewEncapsulation} from '@angular/core';

import {Applications} from './applications';  
import {BaCard} from '../../theme/components';

@Component({
  selector: 'dashboard',
  pipes: [],
  directives: [Applications, BaCard],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.scss')],
  template: require('./dashboard.html')
}) 
export class Dashboard {

  constructor() {
  }

} 
