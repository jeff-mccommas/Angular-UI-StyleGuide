import {Component, ViewEncapsulation} from '@angular/core';
import {BaCard} from '../../../../theme/components';
import {TextButtons} from './components/textButtons';
import {FlatButtons} from './components/flatButtons';
import {GroupButtons} from './components/groupButtons';
import {HttpService} from './../../../../shared/services/http.service';
import {ButtonStates} from "./components/buttonStates/buttonStates.component";

@Component({
  selector: 'buttons',
  encapsulation: ViewEncapsulation.None,
  directives: [
    BaCard,
    TextButtons,
    FlatButtons,
    GroupButtons,
   ButtonStates
  ],
  styles: [require('./buttons.scss')],
  template: require('./buttons.html'),
})
export class Buttons {
  textbuttonshtml:string = require('./components/textButtons/textButtons.html');
  groupbuttonshtml:string = require('./components/groupButtons/groupButtons.html');
  flatButtonshtml:string = require('./components/flatButtons/flatButtons.html');
  buttonstateshtml:string = require('./components/buttonStates/buttonStates.html');
  constructor() {
  }
}
