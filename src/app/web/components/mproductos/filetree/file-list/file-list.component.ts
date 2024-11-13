import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent {
  rightPanelStyle: any = {"display": "none"};
  selectedItemId: number = 0;
  @Input() items: any;
  @Output() categoryId = new EventEmitter<number>();
  @Output() itemId = new EventEmitter<number>();

  private spinner = inject(NgxSpinnerService);

  markProducto(id: number){
    let element: any = document.getElementsByClassName('row-selected')[0];
    if (element) {
      element.classList.remove("row-selected");
    }
    element = document.getElementById('row' + (id));

    element.classList.add("row-selected")
  }

  singleClick(id: number) {
    this.spinner.show();
    this.categoryId.emit(id);
    console.log(id);
    this.markProducto(id)
  }

  doubleClick() {
    this.itemId.emit(0);
  }



  onDeleteProduct(id: number){

    Swal.fire({
     title: 'Eliminar Producto',
     text: 'Desea Continuar?',
     // icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#641330',
     cancelButtonColor: '#949597',
     confirmButtonText: 'Si, Eliminar!'

   }).then( (result:any)=> {
     if (result.isConfirmed) {
       console.log('eliminar registro');
      //  this.categoriesService.delete(this.categoryIdSelected).subscribe({
      //   next: resp=>{
      //     this.categoryIdSelected = 0;
      //     this.getCategories();
      //     const Toast = Swal.mixin({
      //       toast: true,
      //       position: "bottom-end",
      //       showConfirmButton: false,
      //       timer: 3000,
      //       timerProgressBar: true,
      //       didOpen: (toast) => {
      //         toast.onmouseenter = Swal.stopTimer;
      //         toast.onmouseleave = Swal.resumeTimer;
      //       }
      //     });
      //     Toast.fire({
      //       icon: "success",
      //       title: "Categoria Eliminada"
      //     });
      //   },
      //   error: error=>{
      //     alert('error');
      //   }
      //  })
      //  this.deleteRow(id)
     }


   })
}





  detectRightMouseClick($event: any, id: number) {
    this.markProducto(id)

    if ($event.which === 3) {
      this.rightPanelStyle = { 'display': 'block', 'position': 'absolute', 'left.px': $event.clientX-280, 'top.px': $event.clientY-30 };
      this.selectedItemId = id;
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
