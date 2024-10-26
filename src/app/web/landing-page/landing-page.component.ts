import { Component, OnInit, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { LoginComponent } from 'src/core/auth/login/login.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent  {

  infoLeft: String = '';
  openLoginInfo(){
    this.infoLeft = '300px';
  }

  closeLoginInfo(){
    this.infoLeft = '0';
  }
}



