import {Component, ViewEncapsulation} from '@angular/core';

import {BaCard} from '../../../../theme/components';
import {BaKameleonPicturePipe} from '../../../../theme/pipes';
import {IconsService} from './icons.service';

import {SpriteIcons} from './components/spriteIcons';
import {FontIcons} from './components/fontIcons';

@Component({
  selector: 'icons',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, SpriteIcons, FontIcons],
  pipes: [BaKameleonPicturePipe],
  providers: [IconsService],
  styles: [require('./icons.scss')],
  template: require('./icons.html'),
})
export class Icons {
  spriteiconshtml: string = require('./components/spriteIcons/spriteIcons.html');
  fonticonshtml: string = require('./components/fontIcons/fontIcons.html');
  icons: any;

  constructor(private _iconsService: IconsService) {
  }

  ngOnInit() {
    this.icons = this._iconsService.getAll();
  }
}
