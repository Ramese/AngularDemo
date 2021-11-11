import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../appSettings';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User|null>;
  public currentUser: Observable<User|null>;

  constructor(private http: HttpClient) {
    let jsonUser: string | null = localStorage.getItem('currentUser');
    let localStorageUser: User | null = null;

    if(jsonUser) {
      localStorageUser = JSON.parse(jsonUser);
    } 

    this.currentUserSubject = new BehaviorSubject<User | null>(localStorageUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  public IsLoggedIn(): boolean {
    return this.currentUserValue != null;
  }

  public Login(user: User): Observable<User>{

    var userData = {
      UserName: user.UserName,
      Password: user.Password
    };

    var request = this.http.post<User>(`${AppSettings.API_ENDPOINT}/login`, userData)
      .pipe(map(user => {
          // login successful if there's a jwt token in the response
          if (user) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
          }
          
          return user;
      }));

    return request;
  }

  public Logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
