import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-authorized',
  templateUrl: './not-authorized.component.html',
  styleUrls: ['./not-authorized.component.css']
})
export class NotAuthorizedComponent {

  private router = inject(Router);

  login(){
    localStorage.clear();
    this.router.navigateByUrl("auth/login");
  }
}
