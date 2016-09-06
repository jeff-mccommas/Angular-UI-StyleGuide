import {Component, ViewEncapsulation} from '@angular/core';
import { CollapseDirective } from 'ng2-bootstrap/components/collapse';
import {BaCard} from '../../../../theme/components';
import {TextButtons} from './components/textButtons';
import {RaisedButtons} from './components/raisedButtons';
import {FlatButtons} from './components/flatButtons';
import {DisabledButtons} from './components/disabledButtons';
import {IconButtons} from './components/iconButtons';
import {LargeButtons} from './components/largeButtons';
import {DropdownButtons} from './components/dropdownButtons';
import {GroupButtons} from './components/groupButtons';
import {HttpService} from './../../../../shared/services/http.service';

@Component({
  selector: 'buttons',
  encapsulation: ViewEncapsulation.None,
  directives: [
    BaCard,
    TextButtons,
    RaisedButtons,
    FlatButtons,
    DisabledButtons,
    IconButtons,
    LargeButtons,
    DropdownButtons,
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
  disabledButtonhtml:string = require('./components/disabledButtons/disabledButtons.html');
  constructor() {
  }
}
