import {RouterConfig} from '@angular/router';
import {Dashboard} from './dashboard/dashboard.component';
import {Pages} from './pages.component';
import {Ui} from './ui/ui.component';
import {Typography} from './ui/components/typography/typography.component';
import {Buttons} from './ui/components/buttons/buttons.component';
import {Icons} from './ui/components/icons/icons.component';
import {Grid} from './ui/components/grid/grid.component';
import {Forms} from './forms/forms.component';
import {Inputs} from './forms/components/inputs/inputs.component';
import {Layouts} from './forms/components/layouts/layouts.component';
import {BasicTables} from './tables/components/basicTables/basicTables.component';
import {Tables} from './tables/tables.component';
import {Components} from './components/components.component';
import {Alerts} from "./ui/components/alerts/alerts.component";
let apps = {
  configui: "configui",
  applicantGateway: "applicant-gateway",
  evaluator: "evaluator",
  applicantUx: "applicant-ux"
};
//noinspection TypeScriptValidateTypes
export const PagesRoutes:RouterConfig = [
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
        path: 'components',
        component: Components,
        data: {
          menu: {
            title: 'Components',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
            // allowedOn: [apps.configui, apps.applicantGateway, apps.applicantUx, apps.evaluator]
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
            path: 'alerts',
            component:Alerts,
            data: {
              menu: {
                title: 'Alerts',
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

      },
      {
        path: '',
        data: {
          menu: {
            title: 'Pages',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
            // allowedOn: [apps.configui, apps.applicantGateway, apps.applicantUx, apps.evaluator]

          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'Login',
                url: '#/login'
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: 'Register',
                url: '#/register'
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Resources',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
            allowedOn: [apps.configui, apps.applicantGateway, apps.applicantUx, apps.evaluator]

          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'Angular Features ',
                url: 'https://angular.io/features.html',
                target: '_blank',
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: 'Angular Docs ',
                url: 'https://angular.io/docs/ts/latest/',
                target: '_blank',
              }
            },
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Training Sites',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 800,
            allowedOn: [apps.configui, apps.applicantGateway, apps.applicantUx, apps.evaluator]

          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'PluralSight ',
                url: 'https://app.pluralsight.com/library/',
                target: '_blank',
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: 'CSS Tricks ',
                url: 'https://css-tricks.com/',
                target: '_blank',
              }
            },
          },
          {
            path: '',
            data: {
              menu: {
                title: 'Angular ',
                url: 'https://github.com/angular/angular.js/wiki/Training-Courses',
                target: '_blank',
              }
            },
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Liaison Intl',
            url: 'http://www.liaisonedu.com/',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank',
            allowedOn: [apps.configui, apps.applicantGateway, apps.applicantUx, apps.evaluator]
          }
        }
      }
    ]
  }
];
