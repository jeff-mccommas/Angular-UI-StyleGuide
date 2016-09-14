import {Component, ViewEncapsulation, Input} from '@angular/core';
import { MODAL_DIRECTIVES, BS_VIEW_PROVIDERS } from 'ng2-bootstrap/ng2-bootstrap';
import {BaCardBlur} from './baCardBlur.directive';
import {CopyClipboardService} from './../../../shared/services/copyclipboard.service';

@Component({
  selector: 'ba-card',
  styles: [require('./baCard.scss')],
  directives: [BaCardBlur, MODAL_DIRECTIVES],
  viewProviders: [BS_VIEW_PROVIDERS],
  providers: [CopyClipboardService],
  template: require('./baCard.html'),
  encapsulation: ViewEncapsulation.None
})
export class BaCard {
  @Input() title: String;
  @Input() source: String;
  @Input() sourcehtml: String;
  @Input() baCardClass: String;
  public isCollapsed: boolean = true;
  copyTextToClipboard(text: string) {
    this.copyClipboardService.copyTextToClipboard(text);
  }
  constructor(private copyClipboardService: CopyClipboardService) {
  }
}
