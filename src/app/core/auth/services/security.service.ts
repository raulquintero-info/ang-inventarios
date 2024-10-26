import { Injectable, inject } from '@angular/core';
import { LoginRequest } from '../interfaces/loginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, of, tap, throwError } from 'rxjs';
import { LoginResponse } from '../interfaces/loginResponse';
import { environment } from 'src/environments/environment.development';
import { User } from '../interfaces/user.interface';
import { Authority } from '../interfaces/authority.interface';
import { getUserFromLocalStorage, putUserInLocalStorage } from '../../utils/userLocalStorage';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  urlBase = environment.api + environment.path
  url     = this.urlBase + "/auth";   // 'http://localhost:8080/api/auth/login'

  currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>({ "username": "no username", "authorities": [{}] } as User);
  currentUserToken: BehaviorSubject<string> = new BehaviorSubject<string>("");

  private http = inject(HttpClient);


  login(credentials: LoginRequest):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(this.url+ "/login", credentials).pipe(
      tap((loginResponse: LoginResponse) => {
        localStorage.setItem('token', loginResponse.accessToken ? loginResponse.accessToken : '');
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error:HttpErrorResponse){
    if(error.status == 0){
      console.error('Se ha producido un error ',error.error);
    } else {
      console.error('Backend retorno el codigo de error', error.status, error.error)
    }
    return throwError(()=> new Error('Credenciales Invalidas'));
  }



  checkStatus() {
    let currentUser: any;
    let userLogged: User;

    currentUser = localStorage.getItem('user')
    if (currentUser) {
      userLogged = JSON.parse(currentUser);
      this.currentUserData.next(userLogged);
      // this.currentRole.next(userLogged.authorities[0].authority);
      console.log(userLogged);
    } else {
      this.currentUserData.next({} as User);
    }


  }

  currentUser(): Observable<User> {

    return this.http.get<User>(this.url + '/current-user').pipe(
      tap((userData: User) => {
        localStorage.setItem('user', JSON.stringify(userData));
        this.currentUserData.next(userData);
        console.log('currentUser', userData)
      })
    );
  }



  get user(): Observable<User> {
    return this.currentUserData.asObservable();
  }


  get userToken():  Observable<string> {
    // return localStorage.getItem('token');
    return this.currentUserToken.asObservable();
  }

  public getUser(): User {
    let userStr = localStorage.getItem('user') ;
      return JSON.parse( userStr! ) as User;
  }

  public getRole() {
    let user = this.getUser();
      return user.role
  }

  public getToken() {
    return localStorage.getItem('token');
  }


  public logout(){
    console.log('clearStorage')
    localStorage.clear();
    this.checkStatus();

    // this.checkStatus().subscribe();
  }


}
