import {Component, ViewEncapsulation} from '@angular/core';

import {BaCard} from '../../../../theme/components';

@Component({
  selector: 'alerts',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard],
  styles: [require('./alerts.scss')],
  template: require('./alerts.html'),
})
export class Alerts {

  constructor() {
  }
}
