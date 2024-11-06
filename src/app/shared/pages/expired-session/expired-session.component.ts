import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expired-session',
  templateUrl: './expired-session.component.html',
  styleUrls: [ './expired-session.component.css']
})
export class ExpiredSessionComponent implements OnInit {

  private router = inject(Router);


  ngOnInit(): void {
    localStorage.clear()

  }
  gotoLogin() {
    this.router.navigateByUrl("/auth/login");
  }
}
