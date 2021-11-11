import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, from } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  public user: User | null;
  public userSubscription: Subscription;
  public isCollapsed: boolean = true;

  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.userSubscription = this.auth.currentUser
      .subscribe(user => {
        this.user = user;
      });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  logout() {
    this.auth.Logout();
    this.router.navigate(['/login']);
  }

}
