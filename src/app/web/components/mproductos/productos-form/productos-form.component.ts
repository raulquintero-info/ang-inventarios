import { Component, EventEmitter, Input, NgZone, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Almacen } from 'src/app/core/interfaces/almacen.interface';
import { Categoria } from 'src/app/core/interfaces/categoria.interface';
import { Marca } from 'src/app/core/interfaces/marca.interface';
import { Proveedor } from 'src/app/core/interfaces/proveedor.interface';
import { TipoProducto } from 'src/app/core/interfaces/tipo-producto.interface';
import { UnidadMedida } from 'src/app/core/interfaces/unidades-medida';
import { BaseComponent } from 'src/app/core/kernel/base-component';
import { MarcasService } from 'src/app/core/services/marcas.service';
import { ProductosService } from 'src/app/core/services/productos.service';
import { ProveedoresService } from 'src/app/core/services/proveedores.service';
import { TiposProductoService } from 'src/app/core/services/tiposProducto.service';
import { UnidadesMedidaService } from 'src/app/core/services/unidades-medida.service';
import { ProveedorModalComponent } from '../../proveedores/proveedor-modal/proveedor-modal.component';
import { Producto } from 'src/app/core/interfaces/producto.interface';
import { Item } from 'src/app/core/models/Item';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos-form',
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.css']
})
export class ProductosFormComponent extends BaseComponent implements OnInit {
  unidadesMedida: UnidadMedida[] = [];
  proveedores: Proveedor[] = [];
  marcas: Marca[] =[];
  tiposProducto: TipoProducto[] = [];
  spinnerForm:boolean = false;
  title: string             = '';
  date: Date = new Date();
  today = new Date().toJSON().slice(0, 10);
  isVisibleModalGrupo: boolean = false;
  grupoSelected: any={id:0, nombre: null};
  isVisibleModalCategory: boolean = false;
  categorias: Categoria[] = [];

  public activeModal = inject(NgbActiveModal);
  private router = inject(Router);
  private modalService = inject(NgbModal);
  private formBuilder = inject(FormBuilder);
  private ngZone = inject(NgZone);
  private elementService = inject(ProductosService);
  private unidadesMedidaService = inject(UnidadesMedidaService);
  private proveedoresService = inject(ProveedoresService);
  private marcasService = inject(MarcasService);
  // private tiposProductoService = inject(TiposProductoService);
  private categoriesService = inject(CategoriesService);

  @Output() temp: any                 = new EventEmitter<any>();

  @Input() categoryIdSelected: number|null = 0;
  @Input() almacenSelected: Almacen = {} as Almacen;
  @Input() elementSelected: Item = {} as Item;

  @Input() elementForm = this.formBuilder.group({
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
    this.unidadesMedidaService.getAll().subscribe( resp=>{ this.unidadesMedida = resp })
    this.proveedoresService.getAll().subscribe( resp=>{ this.proveedores = resp })
    this.marcasService.getAll().subscribe( resp=>{ this.marcas = resp; } )
    // this.tiposProductoService.getAll().subscribe( resp=>{ this.tiposProducto = resp; })
    console.log('-------------x---',this.elementSelected.nombre);

    this.elementToForm();
    this.getCategories();
  }



  elementToForm(){
    console.log('-------------x---',this.elementSelected.nombre);
    this.elementForm.get('nombreProducto')?.setValue(this.elementSelected.nombre);
  }


  showSpinner(){ this.spinnerForm =true; }
  hideSpinner(){ this.spinnerForm = false; }
  getAll(){ /*TODO: actualizar listado de productos*/ }
  onReset(){ /*TODO: limpiar forma*/ }

  onGenerar() {
    this.elementForm.get('tipoProducto')?.setValue({idTipoProducto:1} as TipoProducto)
    // this.elementForm.get('categoria')?.setValue({idCategoria:3} as Categoria)
    // this.elementForm.get('unidadMedida')?.setValue({idUnidadMedida:1} as UnidadMedida)
    // this.elementForm.get('marca')?.setValue({idMarca:1} as Marca)
    this.sweetConfirmCreateOrUpdate(this, 'titleConfirmDialog');

  }

  gotoGrupos(){
    this.activeModal.close('Close click')
    this.router.navigateByUrl('/catalogos/productos-grupos');
  }

  getCategories(){
    this.categoriesService.getAll().subscribe(
      cat=>{ this.categorias = cat
      console.log(this.categorias)
      }
    )
  }

  onCategory(categoryId: number|null) {
    this.categoryIdSelected = categoryId;
    this.hideModalCategoria()
  }

  showModalGrupo(){ this.isVisibleModalGrupo = true; }
  hideModalGrupo(){ this.isVisibleModalGrupo = false; }
  showModalCategoria(){ this.isVisibleModalCategory = true}
  hideModalCategoria(){ this.isVisibleModalCategory = false}
  removeGrupo(){ this.grupoSelected = {idGrupoProducto:1, nombre: null}; }
  changeCategory(){ this.showModalCategoria()}

  setGrupo(nombreGrupo: string){
    this.hideModalGrupo();
    this.grupoSelected = {idGrupoProducto:1, nombre: nombreGrupo};
  }


  onAddProveedor(){
    const modalRefEditar = this.modalService.open(ProveedorModalComponent, {windowClass:  "generic-small-modal"});
    modalRefEditar.componentInstance.categoryIdSelected = this.categoryIdSelected;
    modalRefEditar.componentInstance.almacenSelected = this.almacenSelected;
    window.scrollTo(0, 0);
  }

  submitted() {
    this.onReset()
    this.getAll();
    this.hideSpinner();
    this.activeModal.close('Close click')
  }




    // didOpen: (toast) => {
    //   toast.onmouseenter = Swal.stopTimer;
    //   toast.onmouseleave = Swal.resumeTimer;
    // }
}
