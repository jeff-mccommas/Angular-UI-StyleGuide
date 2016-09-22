import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GlobalState} from '../../../global.state';
import {UserService} from '../../../shared/services/user.service';
import {CookieService} from './../../../shared/services/cookie.service';

@Component({
  selector: 'ba-page-top',
  styles: [require('./baPageTop.scss')],
  template: require('./baPageTop.html'),
  providers: [UserService, CookieService],
  encapsulation: ViewEncapsulation.None
})
export class BaPageTop implements OnInit {
  styleGuideUser;
  searchtext;
  public isScrolled: boolean = false;
  public isMenuCollapsed: boolean = false;

  constructor(private _state:GlobalState, private _router: Router, private userService: UserService, private cookieService: CookieService) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
  ngOnInit() {
    this.styleGuideUser = this.userService.getUser();
  }
  gotoLogin() {
    this.cookieService.deleteTokenAndUserId();
    this.userService.removeUser();
    this.styleGuideUser = null;
    this._router.navigate(['Login']);
  }
  
  startSearch(){
    this._state.notifyDataChanged('menu.doSearch', this.searchtext);
  }
}
