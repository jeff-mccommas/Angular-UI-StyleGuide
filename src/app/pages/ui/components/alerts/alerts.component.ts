import {Component, ViewEncapsulation} from '@angular/core';
import {BaCard} from '../../../../theme/components';

@Component({
    selector: 'alerts',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./alerts.scss')],
    template: require('./alerts.html'),
})
export class Alerts {
    confirmModalhtml: string = require('./components/confirmModalNg/confirmModalNg.html');
    deleteModalhtml: string = require('./components/deleteModal/deleteModal.html');
    toastrMessageshtml: string = require('./components/toastrMessages/toastrMessages.html');

    constructor() {
    }
}
