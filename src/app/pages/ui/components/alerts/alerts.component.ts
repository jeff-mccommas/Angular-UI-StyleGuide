import {Component, ViewEncapsulation} from '@angular/core';
import {BaCard} from '../../../../theme/components';
import {ConfirmModal} from './components/ConfirmModal';
import {DeleteModal} from './components/deleteModal';
import {ToastrMessages} from './components/toastrMessages';

@Component({
    selector: 'alerts',
    encapsulation: ViewEncapsulation.None,
    directives: [
        BaCard,
        ConfirmModal,
        DeleteModal,
        ToastrMessages,


    ],
    styles: [require('./alerts.scss')],
    template: require('./alerts.html'),
})
export class Alerts {
    confirmModalhtml: string = require('./components/confirmModal/confirmModal.html');
    deleteModalhtml: string = require('./components/deleteModal/deleteModal.html');
    toastrMessageshtml: string = require('./components/toastrMessages/toastrMessages.html');

    constructor() {
    }
}
