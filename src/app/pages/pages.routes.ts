import {RouterConfig} from '@angular/router';
import {Dashboard} from './dashboard/dashboard.component';
import {Charts} from './charts/charts.component';
import {ChartistJs} from './charts/components/chartistJs/chartistJs.component';
import {Pages} from './pages.component';
import {Ui} from './ui/ui.component';
import {Typography} from './ui/components/typography/typography.component';
import {Buttons} from './ui/components/buttons/buttons.component';
import {Icons} from './ui/components/incons/icons.component';
import {Grid} from './ui/components/grid/grid.component';
import {Forms} from './forms/forms.component';
import {Inputs} from './forms/components/inputs/inputs.component';
import {Layouts} from './forms/components/layouts/layouts.component';
import {BasicTables} from './tables/components/basicTables/basicTables.component';
import {Tables} from './tables/tables.component';
import {Maps} from './maps/maps.component';
import {GoogleMaps} from './maps/components/googleMaps/googleMaps.component';
import {LeafletMaps} from './maps/components/leafletMaps/leafletMaps.component';
import {BubbleMaps} from './maps/components/bubbleMaps/bubbleMaps.component';
import {LineMaps} from './maps/components/lineMaps/lineMaps.component';
import {Editors} from './editors/editors.component';
import {Ckeditor} from './editors/components/ckeditor/ckeditor.component';
import {Components} from './components/components.component';
import {TreeView} from './components/components/treeView/treeView.component';


let apps = {
  configui: "configui",
  applicantGateway: "applicant-gateway",
  evaluator: "evaluator",
  applicantUx: "applicant-ux"
};
//noinspection TypeScriptValidateTypes
export const PagesRoutes: RouterConfig = [
  {
    path: 'pages',
    component: Pages,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0,
            allowedOn: [apps.configui, apps.applicantGateway, apps.applicantUx, apps.evaluator]
          }
        }
      },
      {
        path: 'editors',
        component: Editors,
        data: {
          menu: {
            title: 'Editors',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
            allowedOn: [apps.configui, apps.applicantGateway, apps.applicantUx, apps.evaluator]
          }
        },
        children: [
          {
            path: 'ckeditor',
            component: Ckeditor,
            data: {
              menu: {
                title: 'CKEditor'
              }
            }
          }
        ]
      },
      {
        path: 'components',
        component: Components,
        data: {
          menu: {
            title: 'Components',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
            allowedOn: [apps.configui, apps.applicantGateway, apps.applicantUx, apps.evaluator]
          }
        }
      },
      {
        path: 'ui',
        component: Ui,
        data: {
          menu: {
            title: 'UI Features',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300,
            allowedOn: [apps.configui, apps.applicantGateway, apps.applicantUx, apps.evaluator]
          }
        },
        children: [
          {
            path: 'typography',
            component: Typography,
            data: {
              menu: {
                title: 'Typography',
              }
            }
          },
          {
            path: 'buttons',
            component: Buttons,
            data: {
              menu: {
                title: 'Buttons',
              }
            }
          },
          {
            path: 'icons',
            component: Icons,
            data: {
              menu: {
                title: 'Icons',
              }
            }
          },
          {
            path: 'grid',
            component: Grid,
            data: {
              menu: {
                title: 'Grid',
              }
            }
          },
        ]
      },
      {
        path: 'forms',
        component: Forms,
        data: {
          menu: {
            title: 'Form Elements',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
            allowedOn: [apps.configui, apps.applicantGateway, apps.applicantUx, apps.evaluator]
          }
        },
        children: [
          {
            path: 'inputs',
            component: Inputs,
            data: {
              menu: {
                title: 'Form Inputs',
              }
            }
          },
          {
            path: 'layouts',
            component: Layouts,
            data: {
              menu: {
                title: 'Form Layouts',
              }
            }
          }
        ]
      },
      {
        path: 'tables',
        component: Tables,
        data: {
          menu: {
            title: 'Tables',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
            allowedOn: [apps.configui, apps.applicantGateway, apps.applicantUx, apps.evaluator]
          }
        },
        children: [
          {
            path: 'basictables',
            component: BasicTables,
            data: {
              menu: {
                title: 'Basic Tables',
              }
            }
          }
        ]
      }
    ]
  }
];