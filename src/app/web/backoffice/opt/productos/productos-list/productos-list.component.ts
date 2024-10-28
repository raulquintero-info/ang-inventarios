import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Item } from 'src/app/core/models/Item';
import { ITEMS } from 'src/app/data/items';
import { CATEGORIAS } from 'src/app/data/categorias';
import { PRODUCTOS } from 'src/app/data/productos';
import { CurrentWindowSize } from 'src/app/core/services/current-window-size.service';
import { ProductosFormComponent } from 'src/app/web/components/mproductos/productos-form/productos-form.component';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent {
  displayStyle: string = 'none';
  offsetProductos = 111;
  windowSize: string = window.innerHeight - this.offsetProductos + 'px';
  itemSelected: Item | null = {} as Item;
  allProducts = ITEMS;
  items: Item[] = ITEMS;
  categorias: any[] = [];
  categoryIdSelected: number = 0;
  categoriaTitulo: string = '';
  isMaximized = false;
  preventSingleClick = false;
  timer: any;
  // delay: Number = 0;

  page = 1;
  pageSize = 25;
  collectionSize = ITEMS.length;

  private spinner = inject(NgxSpinnerService);
  private modalService = inject(NgbModal);
  private currentWindowSize = inject(CurrentWindowSize);

  constructor() {
  }


  ngOnInit() {
    this.categorias = CATEGORIAS;
    // console.log(this.categorias.lenght)
    this.windowSize = window.innerHeight - this.offsetProductos + 'px';
    this.currentWindowSize.height.subscribe(
      height => { this.windowSize = height - this.offsetProductos - this.offsetProductos + 'px'; console.log(this.offsetProductos, this.windowSize) }

    )
  }

  onAgregarProducto() {
    // const modalRefEditar = this.modalService.open(MyModalComponent);
    // modalRefEditar.componentInstance.name = 'editModal';
    window.scrollTo(0, 0);
  }

  onCategory(categoryId: number) {
    this.categoryIdSelected = categoryId;
    this.items=[];
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

    const modalRefEditar = this.modalService.open(ProductosFormComponent);
    modalRefEditar.componentInstance.name = 'editModal';

  }
  maximize() {
    if (this.windowSize.length < 5) return;
    let temp: number = 0;
    this.offsetProductos = 300;
    temp = Number(this.windowSize.substring(3, 0));
    this.windowSize = temp - this.offsetProductos + 'px';
    this.isMaximized = true;
  }

  minimize() {
    let temp: number = 0;
    this.offsetProductos = -300;
    temp = Number(this.windowSize.substring(3, 0));
    this.windowSize = temp - this.offsetProductos + 'px';
    this.isMaximized = false;
  }
}
