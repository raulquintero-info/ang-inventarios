import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Producto } from 'src/app/core/interfaces/producto.interface';
import { Proveedor } from 'src/app/core/interfaces/proveedor.interface';
import { ProveedoresService } from 'src/app/core/services/proveedores.service';
// import Swal from 'sweetalert2';
import { BaseComponent, ToastDef } from '../../../../../core/kernel/base-component';
import { ProveedorFormComponent } from 'src/app/web/components/proveedores/proveedor-form/proveedor-form.component';
import Swal from 'sweetalert2';
import { ProveedorModalComponent } from 'src/app/web/components/proveedores/proveedor-modal/proveedor-modal.component';

@Component({
  selector: 'app-orden-nueva',
  templateUrl: './orden-nueva.component.html',
  styleUrls: ['./orden-nueva.component.css']
})
export class OrdenNuevaComponent extends BaseComponent implements OnInit {
  // bottomBarSize = "48px";
  // isMaximized = false;

  proveedores: Proveedor[] = [];
  proveedorSelected: Proveedor = {} as Proveedor;
  modalAgergarItem: any;
  carrito: Producto[] = [];
  items: Producto[] =[];
  total = 2500

  private modalService = inject(NgbModal);
  private router = inject(Router)
  private proveedoresService = inject(ProveedoresService);

  constructor(){super()}

  ngOnInit() {
    this.getProveedores();
    // this.modalAgergarItem.componentInstance.name = 'World';
  }

  getProveedores(){ this.proveedoresService.getAll().subscribe( resp=>{ this.proveedores = resp } )}
  setProveedor(index: any){ this.proveedorSelected = index ? this.proveedores[index] : {} as Proveedor; }
  viewOrden(){ this.router.navigateByUrl('/entradas/orden-detalle/1'); }



  onGenerar() {
    // const Toast = Swal.mixin({
    //   toast: true,
    //   position: "top-end",
    //   showConfirmButton: false,
    //   timer: 3000,
    //   timerProgressBar: true,
    //   didOpen: (toast) => {
    //     toast.onmouseenter = Swal.stopTimer;
    //     toast.onmouseleave = Swal.resumeTimer;
    //   }
    // });

    Swal.fire({
      title: "Desea Continuar?",
      text: "Esta Accion Grabara una orden nueva en Base de datos",
      // icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, continuar!"
    }).then((result:any) => {
      if (result.isConfirmed) {
        ToastDef.fire({
          icon: "success",
          title: "Orden Grabada!"
        });
        this.viewOrden();
      }
    });

  }

  onAddProveedor() {
    this.modalAgergarItem = this.modalService.open(ProveedorModalComponent, {windowClass:  "my-modal "});
    // this.modalAgergarItem.componentInstance.name = "Agregar Producto";
    // this.modalAgergarItem.componentInstance.btnText = "Agregar";
    // this.modalAgergarItem.componentInstance.item = this.items[id-1];


  }

  onAddProduct(id: number) {
    // this.modalAgergarItem = this.modalService.open(ModalAgregarItemComponent, {windowClass:  "my-modal "});
    // this.modalAgergarItem.componentInstance.name = "Agregar Producto";
    // this.modalAgergarItem.componentInstance.btnText = "Agregar";
    // this.modalAgergarItem.componentInstance.item = this.items[id-1];


  }
  onEditProduct(id: number) {
    // const modalRef = this.modalService.open(ModalAgregarItemComponent, {windowClass:  "my-modal "});
    // modalRef.componentInstance.name = "Editar Producto";
    // modalRef.componentInstance.btnText = "Editar";
    // modalRef.componentInstance.item = this.carrito[id-1];
  }


   // maximize() {
  //   this.bottomBarSize = "35%";
  //   this.isMaximized = true;

  // }
  // minimize() {
  //   this.bottomBarSize = "48px";
  //   this.isMaximized = false;

  // }

}

