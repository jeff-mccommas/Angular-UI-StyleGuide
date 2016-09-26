import {Component, ViewEncapsulation} from '@angular/core';
import {BaCard} from '../../../../theme/components';

@Component({
    selector: 'Dialogs',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./Dialogs.scss')],
    template: require('./Dialogs.html'),
})
export class Dialogs {
    confirmModalhtml: string = require('./components/confirmModal/confirmModal.html');
    deleteModalhtml: string = require('./components/deleteModal/deleteModal.html');

  editModalhtml: string = require('./components/editModal/editModal.html');
  previewModalhtml: string = require('./components/previewModal/previewModal.html');

    constructor() {
    }
}
