import {Component, ViewEncapsulation} from '@angular/core';
import { CollapseDirective } from 'ng2-bootstrap/components/collapse';
import {BaCard} from '../../../../theme/components';
import {FlatButtons} from './components/flatButtons';
import {RaisedButtons} from './components/raisedButtons';
import {SizedButtons} from './components/sizedButtons';
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
    FlatButtons,
    RaisedButtons,
    SizedButtons,
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
  flatbuttonshtml:string = require('./components/flatButtons/flatButtons.html');
  raisedbuttonhtml:string = require('./components/raisedButtons/raisedButtons.html'); 
  sizedButtonhtml:string = require('./components/sizedButtons/sizedButtons.html');  
  disabledButtonhtml:string = require('./components/disabledButtons/disabledButtons.html');  
  constructor() {
  } 
}
