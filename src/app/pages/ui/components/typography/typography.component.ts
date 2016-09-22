import {Component, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'typography',
  styles: [require('./typography.scss')],
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
