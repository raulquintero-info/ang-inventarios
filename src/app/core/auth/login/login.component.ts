import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from '../services/security.service';
import { LoginRequest } from '../interfaces/loginRequest';
import { LoginResponse } from '../interfaces/loginResponse';
import { LoginResponseError } from '../interfaces/loginResponseError';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  infoSize: String = '';
  error: boolean = false;
  errorMessage: string = '';
  isLoading: boolean = false;

  private router = inject(Router);
  private formBuilder = inject(FormBuilder);
  private securityService = inject(SecurityService);

  ngOnInit(): void {
    this.securityService.currentUser().subscribe(
      resp=>{
        console.log('currentUSer',resp)
        this.router.navigateByUrl("dashboard")

      }
    )
  }

  loginForm = this.formBuilder.group({
    username:['',[Validators.required, Validators.email]],
    password:['', Validators.required]
  })

  get username(){
    return this.loginForm.controls.username;
  }
  get password(){
    return this.loginForm.controls.password;
  }

  loginAs( user: string, pass:string){
    this.loginForm.patchValue({
      username: user,
      password: pass
    });
    this.onLogin()
  }

  onLogin(){
    this.isLoading = true;
    if(this.loginForm.valid){
      console.log("llamada al servicio login");
      this.securityService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData: LoginResponse) => { this.loginSuccess(userData);},
        error: (error)=>{ this.loginFailed(error)}
      })
    }
    else {
      this.loginForm.markAllAsTouched();
      this.isLoading = false;

    }
  }

  loginSuccess(loginResponse: LoginResponse){
    console.log(loginResponse);
    localStorage.setItem('token', loginResponse.accessToken ? loginResponse.accessToken : '');

    this.securityService.currentUser().subscribe({
      next: (userData:User)=>{
        console.log('USER', userData);
        localStorage.setItem('user',JSON.stringify(userData));
        localStorage.setItem('userLoginOn', JSON.stringify(true));


        let url ="dashboard";
        // switch(userData.role){
        //   // switch(userData.authorities[0].authority){
        //   case "CLIENTE":
        //     url="/mi-garage";
        //     break;
        //   case "ADMIN": url="/admin/dashboard"; break;
        //   case "EMPLEADO": url="/admin/dashboard"; break;
        // }

        this.loginForm.reset();
        this.router.navigateByUrl(url);
      },
      error: resp=>{
        console.log('error', resp)
        this.router.navigateByUrl("not-found", {skipLocationChange: true});

      }
    })

    // this.router.navigateByUrl('dashboard');
    this.isLoading = false;
  }

  loginFailed(error: LoginResponseError){
    this.error =true;
    this.errorMessage = error.message;
    this.openLoginInfo()
    this.isLoading = false;

  }

  openLoginInfo(){
    this.infoSize = '300px';
  }

  closeLoginInfo(){
    this.infoSize = '0';
    this.error = false;

  }





}
