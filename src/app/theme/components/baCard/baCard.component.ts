import {Component, ViewEncapsulation, Input} from '@angular/core';
import { CollapseDirective,MODAL_DIRECTIVES, BS_VIEW_PROVIDERS } from 'ng2-bootstrap/ng2-bootstrap'; 
import {BaCardBlur} from './baCardBlur.directive';

@Component({
  selector: 'ba-card',
  styles: [require('./baCard.scss')],
  directives: [BaCardBlur, CollapseDirective, MODAL_DIRECTIVES],
  viewProviders:[BS_VIEW_PROVIDERS],
  template: require('./baCard.html'),
  encapsulation: ViewEncapsulation.None
})
export class BaCard {
  @Input() title:String;
  @Input() source:String;
  @Input() sourcehtml:String;
  @Input() baCardClass:String;
  public isCollapsed:boolean = true;
}
