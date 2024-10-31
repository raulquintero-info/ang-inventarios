import { Component, inject, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/core/auth/services/security.service';
import { User } from '../../core/auth/interfaces/user.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User   = {} as User;
  role: string = "";
  env: string  = "";

  securityService = inject(SecurityService);

  ngOnInit() {
    this.securityService.checkStatus();

    this.securityService.currentUserData.subscribe({
      next: (userData) => {
        this.user = userData
      }
    })

    this.env = environment.production ? 'prod' : 'dev';


  }


}
