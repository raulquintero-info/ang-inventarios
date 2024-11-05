import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Item } from 'src/app/core/models/Item';
import { ITEMS } from 'src/app/data/items';
import { CATEGORIAS } from 'src/app/data/categorias';
import { PRODUCTOS } from 'src/app/data/productos';
import { CurrentWindowSize } from 'src/app/core/services/current-window-size.service';
import { ProductosFormComponent } from 'src/app/web/components/mproductos/productos-form/productos-form.component';
import { offset } from '@popperjs/core';
import { ItemsService } from 'src/app/core/services/items.service';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { Categoria } from 'src/app/core/interfaces/categoria.interface';
import Swal from 'sweetalert2';
import { ProductosService } from '../../../../../core/services/productos.service';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent {
  displayStyle: string = 'none';
  displayStyleNewCategory: string = 'none';
  displayStyleNewItem: string = 'none';
  offsetByMenu: number = 222;
  offset: number = 222;
  windowPDetalleHeight = 300;
  windowPTablaHeight: string = window.innerHeight - this.offset + 'px';
  itemSelected: Item | null = {} as Item;
  allProducts = ITEMS;
  items: Item[] = ITEMS;
  categoriaNueva: Categoria = {nombreCategoria: ''} as Categoria;
  categorias: Categoria[] = [];
  categoryIdSelected: number| null = null;
  categorySelected: Categoria = {idCategoria : 0} as Categoria;
  categoriaTitulo: string = '';
  isMaximized = false;
  preventSingleClick = false;
  windowHeight: number = 0;
  timer: any;
  // delay: Number = 0;

  // contextMenu
  rightPanelStyle: any ={ 'display': 'none' };

  page = 1;
  pageSize = 25;
  collectionSize = ITEMS.length;



  private spinner = inject(NgxSpinnerService);
  private modalService = inject(NgbModal);
  private currentWindowSize = inject(CurrentWindowSize);
  private itemsService = inject(ItemsService);
  private categoriesService = inject(CategoriesService);


  constructor() {
  }


  ngOnInit() {
    this.categorias = CATEGORIAS;
    this.getCategories();

    // console.log(this.categorias.lenght)
    this.windowPTablaHeight = window.innerHeight - this.offset + 'px';
    this.currentWindowSize.height.subscribe(
      height => {
        this.windowHeight = height;
        this.setWindowSize();
        console.log(this.offset, this.windowPTablaHeight)
      }

    )


  }

  getCategories(){
    this.categoriesService.getAll().subscribe(
      cat=>{ this.categorias = cat
      console.log(this.categorias)
      }
    )
  }

  onAgregarProducto() {
    const modalRefEditar = this.modalService.open(ProductosFormComponent, {windowClass:  "generic-modal"});
    modalRefEditar.componentInstance.categoryIdSelected = this.categoryIdSelected;
    window.scrollTo(0, 0);
  }

  openModalNewCategory(){
    this.displayStyleNewCategory = 'block'
  }

  closeModalNewCategory(){
    this.displayStyleNewCategory = 'none'
  }

  onCategory(categoryId: number|null) {
    this.items=[];
    this.categoryIdSelected = categoryId;


    if (categoryId==0){
      this.items = ITEMS;
      return
    }
    this.categoryIdSelected = categoryId;
    if(!categoryId) return
    let temp = PRODUCTOS.filter((x: any)=>{
      if(x.id==categoryId)
      return x;
    })
    this.items = temp[0].content;
    // this.categoriaTitulo = categoria;

    // this.items = PRODUCTOS;
  }




  singleClick(id: any) {
    console.log(id)
    this.preventSingleClick = false;
    const delay = 200;
    this.timer = setTimeout(() => {
      if (!this.preventSingleClick) {
        this.itemSelected = null;
        this.spinner.show();

        this.timer = setTimeout(() => {

          this.itemSelected = this.allProducts[id];
        }, 300)
        this.spinner.hide();
        //  alert('Single Click Event');
        if (!this.isMaximized)
          this.maximize();

      }
    }, delay);
  }

  doubleClick(itemId: number) {
    this.preventSingleClick = true;
    clearTimeout(this.timer);
    // alert('No es posible mostar el Modal para editar el articulo')
    console.log("No es posible mostar el Modal para editar el articulo");

    const modalRefEditar = this.modalService.open(ProductosFormComponent, {windowClass:  "generic-modal"});
    modalRefEditar.componentInstance.categoryIdSelected = this.categoryIdSelected;

  }

  onDeleteCategory(){
      Swal.fire({
       title: 'Eliminar Categoria',
       text: 'Desea Continuar?',
       // icon: 'warning',
       showCancelButton: true,
       confirmButtonColor: '#641330',
       cancelButtonColor: '#949597',
       confirmButtonText: 'Si, Eliminar!'

     }).then( (result:any)=> {
       if (result.isConfirmed) {
         console.log('eliminar registro');
         this.categoriesService.delete(this.categoryIdSelected).subscribe({
          next: resp=>{
            this.categoryIdSelected = 0;
            this.getCategories();
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
            Toast.fire({
              icon: "success",
              title: "Categoria Eliminada"
            });
          },
          error: error=>{
            alert('error');
          }
         })
        //  this.deleteRow(id)
       }


     })
  }

  onNewCategory(){
    if(this.categoriaNueva.nombreCategoria.length==0){
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
      Toast.fire({
        icon: "error",
        title: "El campo categoria no puede estar vacio"
      });


      return
    }


    this.categoriaNueva.parentId = this.categoryIdSelected;
    console.log(this.categoriaNueva);
    this.categoriesService.createOrUpdate(this.categoriaNueva).subscribe({
      next: resp=>{
        this.getCategories();
        this.closeModalNewCategory();
        this.categoriaNueva.nombreCategoria ='';
      },
      error: error=>{
        alert('error al crear categoria nueva');
      }
    })
  }

  setWindowSize(){
    this.windowPTablaHeight =  this.windowHeight - this.offset + 'px';
  }

  maximize() {
    if (this.windowPTablaHeight.length < 5) return;
    let temp: number = 0;
    this.isMaximized = true;
    temp = Number(this.windowPTablaHeight.substring(3, 0));
    this.offset = this.offset + this.windowPDetalleHeight;
    this.setWindowSize();
    console.log('maximize')
  }

  minimize() {
    let temp: number = 0;
    temp = Number(this.windowPTablaHeight.substring(3, 0));
    this.offset = this.offset - this.windowPDetalleHeight;
    this.setWindowSize();
    this.isMaximized = false;
    console.log('minimize')
  }

  // contextMenu


  detectRightMouseClick(rightPanelStyle: any, x:null) {

    console.log('array',rightPanelStyle)
    this.rightPanelStyle = rightPanelStyle;

    if (rightPanelStyle.id) {
      this.rightPanelStyle = rightPanelStyle;
      return false;
    }
    return true;
  }

  closeContextMenu() {

    setTimeout(() => {
      this.onCloseContextMenuMouse();
    }, 600)
  }

  onCloseContextMenuMouse() {
      this.rightPanelStyle = { 'display': 'none' };

  }

}
