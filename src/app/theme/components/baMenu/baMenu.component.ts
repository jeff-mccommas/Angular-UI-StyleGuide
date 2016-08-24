import {Component, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import {Router, RouterConfig, NavigationEnd} from '@angular/router';
import {Subscription} from 'rxjs/Rx';
import {AppState} from '../../../app.state';
import {MenuFilterPipe} from "./baMenu.pipe";

import {BaSlimScroll} from '../../../theme/directives';
import {BaMenuService} from './baMenu.service';
import {BaMenuItem} from './components/baMenuItem';

@Component({
  selector: 'ba-menu',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./baMenu.scss')],
  template: require('./baMenu.html'),
  providers: [BaMenuService],
  directives: [BaMenuItem, BaSlimScroll],
  pipes:[MenuFilterPipe]
})
export class BaMenu {

  @Input() menuRoutes: RouterConfig = [];
  @Input() sidebarCollapsed: boolean = false;
  @Input() menuHeight: number;

  @Output() expandMenu = new EventEmitter<any>();

  public menuItems: any[];
  public showHoverElem: boolean;
  public hoverElemHeight: number;
  public hoverElemTop: number;
  protected _onRouteChange: Subscription;
  public outOfArea: number = -200;
  searchQuery: string = "";
  public allMenuItems: any[];
  public selectedApp: any = {
    "key": "configui",
    "name": "ConfigUI",
    "icon": "touch-screen"
  };
  public allowRender: boolean = true;
  public renderMenu(): void {
    let currentAppsMenuItem: any[] = [];
    if (this.allowRender) {
      this.allowRender = false;
      for (let i = 0; i < this.allMenuItems.length; i++) {
        if (this.allMenuItems[i].allowedOn && this.allMenuItems[i].allowedOn.indexOf(this.selectedApp.key) > -1) {
          currentAppsMenuItem.push(this.allMenuItems[i]);
        }
      }
      this.menuItems = currentAppsMenuItem;
    }
  }
  constructor(private _router: Router, private _service: BaMenuService, private _state: AppState) {
    this._state.subscribe('application.selected', (app) => {
      //this.selectedApp contains whole object of app that is selected on dashboard screen by user
      this.selectedApp = app;
      this.allowRender = true;
      this.renderMenu();
    });

    this._state.subscribe('menu.doSearch', (searchtext) => { 
            this.searchQuery = searchtext;
        });

    this._onRouteChange = this._router.events.subscribe((event) => {
      if (this.menuItems && event instanceof NavigationEnd) {
        this.menuItems = this._service.selectMenuItem(this.menuItems);
      }
    });
  }

  public ngOnInit(): void {
    this.allMenuItems = this._service.convertRoutesToMenus(this.menuRoutes);
    this.renderMenu();
  }

  public ngOnDestroy(): void {
    this._onRouteChange.unsubscribe();
  }

  public hoverItem($event): void {
    this.showHoverElem = true;
    this.hoverElemHeight = $event.currentTarget.clientHeight;
    // TODO: get rid of magic 66 constant
    this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 66;
  }

  public toggleSubMenu($event): boolean {
    var submenu = jQuery($event.currentTarget).next();

    if (this.sidebarCollapsed) {
      this.expandMenu.emit(null);
      if (!$event.item.expanded) {
        $event.item.expanded = true;
      }
    } else {
      $event.item.expanded = !$event.item.expanded;
      submenu.slideToggle();
    }

    return false;
  }
}
