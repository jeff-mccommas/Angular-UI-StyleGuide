import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppState} from '../../../app.state';
import {BaProfilePicturePipe} from '../../pipes';
import {BaMsgCenter} from '../../components/baMsgCenter';
import {BaScrollPosition} from '../../directives';
import {UserService} from '../../../shared/services/user.service';
import {CookieService} from './../../../shared/services/cookie.service';

@Component({
  selector: 'ba-page-top',
  styles: [require('./baPageTop.scss')],
  template: require('./baPageTop.html'),
  directives: [BaMsgCenter, BaScrollPosition],
  providers: [UserService, CookieService],
  pipes: [BaProfilePicturePipe],
  encapsulation: ViewEncapsulation.None
})
export class BaPageTop implements OnInit {
  styleGuideUser;
  searchtext;
  public isScrolled: boolean = false;
  public isMenuCollapsed: boolean = false;

  constructor(private _state: AppState, private _router: Router, private userService: UserService, private cookieService: CookieService) {
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
