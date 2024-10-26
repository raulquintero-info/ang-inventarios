import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/auth/interfaces/user.interface';
import { SecurityService } from 'src/app/core/auth/services/security.service';
import { ALMACENES } from 'src/app/core/data/almacenes';

@Component({
  selector: 'app-navbar-back',
  templateUrl: './navbar-back.component.html',
  styleUrls: ['./navbar-back.component.css']
})
export class NavbarBackComponent implements OnInit{
  almacenes = ALMACENES;
  almacenSelected: any = ALMACENES[0];
  user: User = {} as User;

  private router = inject(Router);
  private securityService = inject(SecurityService);

  ngOnInit(): void {
    this.securityService.currentUserData.subscribe({
      next: (userData) => {
        this.user = userData
      }
    })
  }

  onAlmacen(almacen: any){
    this.almacenSelected = almacen;
  }

  onLogout(){

    this.securityService.logout();
    this.router.navigateByUrl("/");
  }
}
