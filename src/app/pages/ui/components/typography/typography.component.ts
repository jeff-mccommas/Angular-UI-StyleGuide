import {Component, ViewEncapsulation} from '@angular/core';


import {BaAppPicturePipe} from '../../../../theme/pipes';
import {BaCard} from '../../../../theme/components';
import {TextSize} from './components/textSize';
import {Lists} from './components/lists';
import {MoreText} from './components/moreText';
import {TextColor} from './components/textColor';

@Component({
  selector: 'typography',
  pipes: [BaAppPicturePipe],
  directives: [BaCard, TextSize, Lists, MoreText, TextColor],
  providers: [],
  styles: [],
  template: require('./typography.html'),
})
export class Typography {
  textsizehtml: string = require('./components/textSize/textSize.html');
  listshtml: string = require('./components/lists/lists.html');
  moretexthtml: string = require('./components/moreText/moreText.html');
  textcolorhtml: string = require('./components/textColor/textColor.html');
  constructor() {
  }
}
