import { Routes, RouterModule }  from '@angular/router';

import { Ui } from './ui.component';
import { Dialogs } from './components/dialogs/Dialogs.component';
import { Buttons } from './components/buttons/buttons.component';
import { Grid } from './components/grid/grid.component';
import { Icons } from './components/icons/icons.component';
import { Typography } from './components/typography/typography.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Ui,
    children: [
      { path: 'Dialogs', component: Dialogs },
      { path: 'buttons', component: Buttons },
      { path: 'grid', component: Grid },
      { path: 'icons', component: Icons },
      { path: 'typography', component: Typography }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
