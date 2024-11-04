import { Component, Input, NgZone, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Categoria } from 'src/app/core/interfaces/categoria.interface';
import { Marca } from 'src/app/core/interfaces/marca.interface';
import { Proveedor } from 'src/app/core/interfaces/proveedor.interface';
import { TipoProducto } from 'src/app/core/interfaces/tipo-producto.interface';
import { UnidadMedida } from 'src/app/core/interfaces/unidades-medida';
import { MarcasService } from 'src/app/core/services/marcas.service';
import { ProveedoresService } from 'src/app/core/services/proveedores.service';
import { TiposProductoService } from 'src/app/core/services/tiposProducto.service';
import { UnidadesMedidaService } from 'src/app/core/services/unidades-medida.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos-form',
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.css']
})
export class ProductosFormComponent implements OnInit {
  unidadesMedida: UnidadMedida[] = [];
  proveedores: Proveedor[] = [];
  marcas: Marca[] =[];
  tiposProducto: TipoProducto[] = [];


  public activeModal = inject(NgbActiveModal);
  private formBuilder = inject(FormBuilder);
  private ngZone = inject(NgZone);
  private unidadesMedidaService = inject(UnidadesMedidaService);
  private proveedoresService = inject(ProveedoresService);
  private marcasService = inject(MarcasService);
  private tiposProductoService = inject(TiposProductoService);

  @Input() categoryIdSelected: number | null = 0;

  @Input() elementForm = this.formBuilder.group({
    idProducto:[ 0, [Validators.required]],
    nombreProducto:  [ '', [Validators.required]],
    descripcionProducto:  [ '', [Validators.required]],
    sku:  [ '', [Validators.required]],
    precio:  [ '', [Validators.required]],
    cantidad:  [ '', [Validators.required]],
    minimo:  [ '', [Validators.required]],
    maximo:  [ '', [Validators.required]],
    unidadMedida:  [ {} as UnidadMedida, [Validators.required]],
    proveedor:  [ {} as Proveedor, [Validators.required]],
    marca:  [ {} as Marca, [Validators.required]],
    tipoProducto:  [ {} as TipoProducto, [Validators.required]],
    fechaCreacion:  [ '', [Validators.required]],
    fechaActualizacion:  [ '', [Validators.required]],
    categoria:  [ {} as Categoria, [Validators.required]],
  })

  get idProducto(){ return this.elementForm.controls.idProducto; }
  get nombreProducto(){ return this.elementForm.controls.nombreProducto; }
  get descripcionProducto(){ return this.elementForm.controls.descripcionProducto; }
  get sku(){ return this.elementForm.controls.sku; }
  get precio(){ return this.elementForm.controls.precio; }
  get cantidad(){ return this.elementForm.controls.cantidad; }
  get minimo(){ return this.elementForm.controls.minimo; }
  get maximo(){ return this.elementForm.controls.maximo; }
  get unidadMedida(){ return this.elementForm.controls.unidadMedida; }
  get proveedor(){ return this.elementForm.controls.proveedor; }
  get tipoProducto(){ return this.elementForm.controls.tipoProducto; }
  get fechaCreacion(){ return this.elementForm.controls.fechaCreacion; }
  get fechaActualizacion(){ return this.elementForm.controls.fechaActualizacion; }
  get categoria(){ return this.elementForm.controls.categoria; }


  ngOnInit() {

    this.tiposProductoService.getAll().subscribe( resp=>{ this.tiposProducto = resp})
    this.unidadesMedidaService.getAll().subscribe( resp=>{ this.unidadesMedida = resp })
    this.proveedoresService.getAll().subscribe( resp=>{ this.proveedores = resp })
    this.marcasService.getAll().subscribe( resp=>{ this.marcas = resp; } )
    this.tiposProductoService.getAll().subscribe({
      next: resp=>{ this.tiposProducto = resp;
      }
    })
  }

  onGenerar() {
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });

    Swal.fire({
      title: "Desea Continuar?",
      text: "LA informacion del Producto sera Actualiazada",
      // icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, continuar!"
    }).then((result) => {
      if (result.isConfirmed) {
        Toast.fire({
          icon: "success",
          title: "Producto Actualizado!"
        });
        this.viewOrden();
      }
    });

  }

  viewOrden() {
    this.activeModal.close('Close click')
  }
}
