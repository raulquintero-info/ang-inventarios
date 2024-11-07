import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenes-compra',
  templateUrl: './ordenes-compra.component.html',
  styleUrls: ['./ordenes-compra.component.css']
})
export class OrdenesCompraComponent {
  bottomBarSize = "52px";
  isMaximized = false;
  // listaOrdenes: any [] = ENTRADASORDENES
  listaOrdenes: any [] = [];


  maximize(){
    this.bottomBarSize="200px";
    this.isMaximized = true;

  }
  minimize(){
    this.bottomBarSize="52px";
    this.isMaximized = false;

  }

}
