import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Categoria } from 'src/app/core/interfaces/categoria.interface';
import { Marca } from 'src/app/core/interfaces/marca.interface';
import { Producto } from 'src/app/core/interfaces/producto.interface';
import { Proveedor } from 'src/app/core/interfaces/proveedor.interface';
import { TipoProducto } from 'src/app/core/interfaces/tipo-producto.interface';
import { UnidadMedida } from 'src/app/core/interfaces/unidades-medida';
import { BaseComponent, ToastDef } from 'src/app/core/kernel/base-component';
import { ProductosService } from 'src/app/core/services/productos.service';
import { GrupoProductosService } from '../../../../../core/services/grupo-productos.service';
import { GrupoProducto } from 'src/app/core/interfaces/grupo-producto.interface';

@Component({
  selector: 'app-grupos-productos-content',
  templateUrl: './grupos-productos-content.component.html',
  styleUrls: ['./grupos-productos-content.component.css']
})
export class GruposProductosContentComponent extends BaseComponent implements OnInit {

  message: string = 'Procesando '
  title                   = 'Grupo de Productos';
  elements: GrupoProducto []      = [];
  element: GrupoProducto          = {nombreGrupo: '' } as GrupoProducto;
  grupoSelected: GrupoProducto = {idGrupo: 0} as GrupoProducto;
  showGrupoForm: boolean = false;
  productos: Producto[] = [];
  spinnerTable: boolean   = false
  date: Date = new Date();
  today = new Date().toJSON().slice(0, 10);

  private productosService = inject(ProductosService);
  private elementService  = inject(GrupoProductosService);
  private formBuilder = inject(FormBuilder);

  elementForm = this.formBuilder.group({
    idGrupo:[ 0, [Validators.required]],
    nombreGrupo:  [ '', [Validators.required]],
    status:  [ false, [Validators.required]],
  })


  @Input() elementFormProducto = this.formBuilder.group({
    idProducto:           [ 0, [Validators.required]],
    nombreProducto:       [ '', [Validators.required]],
    descripcionProducto:  [ '', [Validators.required]],
    nombreGrupo:          [ {idNombreGrupo: 1}],
    sku:                  [ '', [Validators.required]],
    precio:               [ 0, [Validators.required]],
    cantidad:             [ 0, [Validators.required]],
    minimo:               [ 0, [Validators.required]],
    maximo:               [ 0, [Validators.required]],
    unidadMedida:         [ {idUnidadMedida:1} as UnidadMedida, [Validators.required]],
    proveedor:            [ {idProveedor:3} as Proveedor, [Validators.required]],
    marca:                [ {idMarca:1} as Marca, [Validators.required]],
    tipoProducto:         [ {idTipoProducto:1} as TipoProducto, [Validators.required]],
    fechaCreacion:        [ this.today, [Validators.required]],
    fechaActualizacion:   [ this.today, [Validators.required]],
    categoria:            [ {idCategoria:4} as Categoria, [Validators.required]],
  })

  get idProducto(){ return this.elementFormProducto.controls.idProducto; }
  get nombreProducto(){ return this.elementFormProducto.controls.nombreProducto; }
  get descripcionProducto(){ return this.elementFormProducto.controls.descripcionProducto; }

  get sku(){ return this.elementFormProducto.controls.sku; }
  get precio(){ return this.elementFormProducto.controls.precio; }
  get cantidad(){ return this.elementFormProducto.controls.cantidad; }
  get minimo(){ return this.elementFormProducto.controls.minimo; }
  get maximo(){ return this.elementFormProducto.controls.maximo; }
  get unidadMedida(){ return this.elementFormProducto.controls.unidadMedida; }
  get proveedor(){ return this.elementFormProducto.controls.proveedor; }
  get tipoProducto(){ return this.elementFormProducto.controls.tipoProducto; }
  get fechaCreacion(){ return this.elementFormProducto.controls.fechaCreacion; }
  get fechaActualizacion(){ return this.elementFormProducto.controls.fechaActualizacion; }
  get categoria(){ return this.elementFormProducto.controls.categoria; }



  constructor(){ super();
    this.sizeMaximized = '400px';
  }

  ngOnInit(): void {
    this.getAllGrupos();
  }

  onDelete(id:number){ this.sweetConfirmDelete(this,'Desea borrar este ' + this.title,id); }
  hideSpinner(){ this.spinnerTable = false }
  showSpinner(){ this.spinnerTable = true }
  onShowGrupoForm(){this.showGrupoForm = true}
  onCancelGrupoForm(){this.showGrupoForm = false}

  onRowProducto(producto: Producto){ }

  updateElements(temp: any){
    this.getAllGrupos();
    this.showGrupoForm = false;
    this.hideSpinner();
  }
  onRow(item: GrupoProducto){
    this.grupoSelected=item;
    this.getAllProductos();
    console.log('elementId', item)
  }

  onEdit(element: GrupoProducto){
    this.showGrupoForm = true;
    this.elementForm.get('idGrupo')?.setValue(element.idGrupo);
    this.elementForm.get('nombreGrupo')?.setValue(element.nombreGrupo);
  }

  getAllGrupos(){
    this.showSpinner();
    this.elementService.getAll().subscribe({
      next: resp=>{
        this.elements = resp;
        console.log('resp',resp);
        this.hideSpinner()
      },
      error: error=>{
        ToastDef.fire({ icon: "error", title: "Error al obtener la lista de registros" });
        this.hideSpinner();
      }
    })
  }


  getAllProductos(){
    this.showSpinner();
    this.productosService.getAll().subscribe({
      next: resp=>{
        this.productos = resp;
        this.hideSpinner()
      },
      error: error=>{
        ToastDef.fire({ icon: "error", title: "Error al obtener la lista de registros" });
        this.hideSpinner();
      }
    })
  }

  onEditProducto(item: Producto){}

}
