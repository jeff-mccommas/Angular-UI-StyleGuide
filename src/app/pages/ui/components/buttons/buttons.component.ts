import {Component, ViewEncapsulation} from '@angular/core';
import { CollapseDirective } from 'ng2-bootstrap/components/collapse';
import {BaCard} from '../../../../theme/components';
import {TextButtons} from './components/textButtons';
import {FlatButtons} from './components/flatButtons';
import {GroupButtons} from './components/groupButtons';
import {HttpService} from './../../../../shared/services/http.service';

@Component({
  selector: 'buttons',
  encapsulation: ViewEncapsulation.None,
  directives: [
    BaCard,
    TextButtons,
    FlatButtons,
    GroupButtons,
    CollapseDirective
  ],
  styles: [require('./buttons.scss')],
  template: require('./buttons.html'),
})
export class Buttons {
  textbuttonshtml:string = require('./components/textButtons/textButtons.html');
  groupbuttonshtml:string = require('./components/groupButtons/groupButtons.html');
  flatButtonshtml:string = require('./components/flatButtons/flatButtons.html');
  constructor() {
  }
}
