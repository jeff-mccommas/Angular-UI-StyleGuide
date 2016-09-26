import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './ui.routing';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ui } from './ui.component';
import { Dialogs } from './components/dialogs/Dialogs.component';
import { Buttons } from './components/buttons/buttons.component';
import { Grid } from './components/grid/grid.component';
import { Icons } from './components/icons/icons.component';
import { Typography } from './components/typography/typography.component';

import { IconsService } from './components/icons/icons.service';

import { ConfigUiTextButtons } from './components/buttons/components/configui/textButtons';
import { ConfigUiFlatButtons } from './components/buttons/components/configui/flatButtons';
import { ConfigUiGroupButtons } from './components/buttons/components/configui/groupButtons';
import { ConfigUiButtonStates } from './components/buttons/components/configui/buttonStates';
import { ApplicantUxButtonStates } from './components/buttons/components/applicant-ux/buttonStates';
import { ApplicantUxTextButtons } from './components/buttons/components/applicant-ux/textButtons';
import { ApplicantUxFlatButtons } from './components/buttons/components/applicant-ux/flatButtons';
import { ApplicantUxGroupButtons } from './components/buttons/components/applicant-ux/groupButtons';
import {ApplicationService} from './../dashboard/applications/application.service';

import {ConfigUiSpriteIcons} from './components/icons/components/configui/spriteIcons';
import {ApplicantUxCasIcons} from './components/icons/components/applicant-ux/casIcons';
import {FontIcons} from './components/icons/components/fontIcons';

import {TextSize} from './components/typography/components/textSize';
import {Lists} from './components/typography/components/lists';
import {MoreText} from './components/typography/components/moreText';
import {TextColor} from './components/typography/components/textColor';

import {ConfirmModal} from './components/dialogs/components/confirmModal';
import {deleteModal} from "./components/dialogs/components/deleteModal/deleteModal.component";
import {PreviewModal} from "./components/dialogs/components/previewModal/previewModal.component";
import {EditModal} from "./components/dialogs/components/editModal/editModal.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    DropdownModule,
    routing
  ],
  declarations: [
    Dialogs,
    Buttons,
    Grid,
    Icons,
    Typography,
    Ui,
    ConfigUiTextButtons,
    ConfigUiFlatButtons,
    ConfigUiGroupButtons,
    ConfigUiButtonStates,
    ApplicantUxButtonStates,
    ApplicantUxTextButtons,
    ApplicantUxFlatButtons,
    ApplicantUxGroupButtons,
    ConfigUiSpriteIcons,
    ApplicantUxCasIcons,
    FontIcons,
    TextSize,
    Lists,
    MoreText,
    TextColor,
    ConfirmModal,
    deleteModal,
    EditModal,
    PreviewModal
    // ToastrMessages
  ],
  providers: [
    IconsService,
    ApplicationService
  ]
})
export default class UiModule {
}
