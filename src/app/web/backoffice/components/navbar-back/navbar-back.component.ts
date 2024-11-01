import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/auth/interfaces/user.interface';
import { SecurityService } from 'src/app/core/auth/services/security.service';
import { ALMACENES } from 'src/app/core/data/almacenes';
import { Almacen } from 'src/app/core/interfaces/almacen.interface';
import { AlmacenesService } from 'src/app/core/services/almacenes.service';

@Component({
  selector: 'app-navbar-back',
  templateUrl: './navbar-back.component.html',
  styleUrls: ['./navbar-back.component.css']
})
export class NavbarBackComponent implements OnInit{
  almacenes: Almacen [] = ALMACENES;
  almacenSelected: Almacen= {} as Almacen;
  user: User = {} as User;

  private router = inject(Router);
  private securityService = inject(SecurityService);
  private almacenesService = inject(AlmacenesService);

  ngOnInit(): void {

    //obtener datos del usuario logueado
    this.securityService.currentUserData.subscribe({next: (userData) => {this.user = userData}});


    this.almacenesService.currentAlmacen.subscribe(resp=>{this.almacenSelected = resp;});
    this.almacenesService.almacenesLista.subscribe(resp=>{this.almacenes = resp;});
    this.almacenesService.getAll().subscribe(resp=>{this.almacenesService.setAlmacenes(resp);});

  }

  getAlmacenes(){
    this.almacenesService.getAll().subscribe(
      (resp:Almacen[])=>{
        this.almacenes = resp;
        this.almacenesService.setAlmacenes(resp);
        console.log('set', resp);
      }
    )
  }

  onAlmacen(almacen: any){
    // this.almacenSelected = almacen;
    this.almacenesService.setAlmacen(almacen);
  }

  onLogout(){

    this.securityService.logout();
    this.router.navigateByUrl("/");
  }
}
