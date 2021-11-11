import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User;
  private returnUrl: string;
  
  constructor(
    private router: Router, 
    private auth: AuthService,
    private route: ActivatedRoute
  ) {
    this.user = new User();
    this.returnUrl = '';
  }
  
  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.auth.Login(this.user)
      .subscribe(
        user => {
          this.router.navigate([this.returnUrl]);
        }
      );

  }
}