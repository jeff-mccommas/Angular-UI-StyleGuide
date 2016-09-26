import {Component, ViewEncapsulation, ViewChild, Input} from '@angular/core';
import {CopyClipboardService} from './../../../shared/services/copyclipboard.service';

// webpack html imports
let template = require('./baCard.html');
@Component({
  selector: 'ba-card',
  styles: [require('./baCard.scss')],
  template: template,
  providers: [CopyClipboardService]
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
