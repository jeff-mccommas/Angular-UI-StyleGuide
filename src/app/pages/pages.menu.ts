let apps = {
  configui: "configui",
  applicantGateway: "applicant-gateway",
  evaluator: "evaluator",
  applicantUx: "applicant-ux"
};
export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
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
        data: {
          menu: {
            title: 'Editors',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'ckeditor',
            data: {
              menu: {
                title: 'CKEditor',
              }
            }
          }
        ]
      },
      //{
      //  path: 'components',
      //  data: {
      //    menu: {
      //      title: 'Components',
      //      icon: 'ion-gear-a',
      //      selected: false,
      //      expanded: false,
      //      order: 250,
      //    }
      //  },
      //  children: [
      //    {
      //      path: 'treeview',
      //      data: {
      //        menu: {
      //          title: 'Tree View',
      //        }
      //      }
      //    }
      //  ]
      //},
      {
        path: 'charts',
        data: {
          menu: {
            title: 'Charts',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'chartist-js',
            data: {
              menu: {
                title: 'Chartist.Js',
              }
            }
          }
        ]
      },
      {
        path: 'ui',
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
            data: {
              menu: {
                title: 'Typography',
              }
            }
          },
          {
            path: 'buttons',
            data: {
              menu: {
                title: 'Buttons',
              }
            }
          },
          {
            path: 'alerts',
            data: {
              menu: {
                title: 'Alerts',
              }
            }
          },
          {
            path: 'icons',
            data: {
              menu: {
                title: 'Icons',
              }
            }
          },
          {
            path: 'grid',
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
            data: {
              menu: {
                title: 'Form Inputs',
              }
            }
          },
          {
            path: 'layouts',
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
            data: {
              menu: {
                title: 'Basic Tables',
              }
            }
          }
        ]
      },
      {
        path: 'maps',
        data: {
          menu: {
            title: 'Maps',
            icon: 'ion-ios-location-outline',
            selected: false,
            expanded: false,
            order: 600,
          }
        },
        children: [
          {
            path: 'googlemaps',
            data: {
              menu: {
                title: 'Google Maps',
              }
            }
          },
          {
            path: 'leafletmaps',
            data: {
              menu: {
                title: 'Leaflet Maps',
              }
            }
          },
          {
            path: 'bubblemaps',
            data: {
              menu: {
                title: 'Bubble Maps',
              }
            }
          },
          {
            path: 'linemaps',
            data: {
              menu: {
                title: 'Line Maps',
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
            allowedOn: []
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
