import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Router, Routes, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Rx'; 

import { BaMenuService } from './baMenu.service';
import { GlobalState } from '../../../global.state';

@Component({
  selector: 'ba-menu',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./baMenu.scss')],
  template: require('./baMenu.html'),
  providers: [BaMenuService]
})
export class BaMenu {

  @Input() menuRoutes: Routes = [];
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

  constructor(private _router: Router, private _service: BaMenuService, private _state: GlobalState) {
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

      if (event instanceof NavigationEnd) {
        if (this.menuItems) {
          this.selectMenuAndNotify();
        } else {
          // on page load we have to wait as event is fired before menu elements are prepared
          setTimeout(() => this.selectMenuAndNotify());
        }
      }
    });
  }

  public selectMenuAndNotify(): void {
    if (this.menuItems) {
      this.menuItems = this._service.selectMenuItem(this.menuItems);
      this._state.notifyDataChanged('menu.activeLink', this._service.getCurrentItem());
    }
  }

  public ngOnInit(): void {
    //this.menuItems = this._service.convertRoutesToMenus(this.menuRoutes);
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
