import {Component, ViewEncapsulation} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import { TAB_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { CollapseDirective } from 'ng2-bootstrap/components/collapse';

@Component({
  selector: 'configUi',
  encapsulation: ViewEncapsulation.None,
  directives: [CORE_DIRECTIVES, TAB_DIRECTIVES,CollapseDirective],
  providers: [],
  styles: [require('./configUi.scss')],
  template: require('./configUi.html')
})
export class ConfigUi {
  constructor() {}
}

