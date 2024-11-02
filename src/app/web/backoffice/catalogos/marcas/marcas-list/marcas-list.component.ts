import { Component, OnInit, inject } from '@angular/core';
import { Marca } from 'src/app/core/interfaces/marca.interface';
import { BaseComponent, cancelColor, confirmColor } from 'src/app/core/kernel/base-component';
import { MarcasService } from 'src/app/core/services/marcas.service';
import { ToastDef } from 'src/app/core/utils/sweetalert/sweetalert';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-marcas-list',
  templateUrl: './marcas-list.component.html',
  styleUrls: ['./marcas-list.component.css']
})
export class MarcasListComponent extends BaseComponent implements OnInit {
  titleForm: string = 'Agregar';
  buttonForm: string = 'Grabar';
  message: string = 'Procesando '
  title                   = 'marcas';
  elements: Marca []      = [];
  element: Marca          = {marca: '' } as Marca;
  elementSelected: Marca  = {idMarca: 0, marca: '' } as Marca;
  spinnerTable: boolean   = false


  private elementService  = inject(MarcasService);

  constructor(){ super(); }

  ngOnInit(): void {
    this.getAll();
  }

  onRow(id: number){ console.log('elementId', id) }
  onDelete(id:number){ this.sweetConfirmDelete(this,'',id); }
  onSubmit(element: any){ this.elementSelected = element; }
  updateElements(temp: any){ this.getAll() }
  hideSpinner(){ this.spinnerTable = false }
  showSpinner(){ this.spinnerTable = true }

  getAll(){
    this.showSpinner();
    this.elementService.getAll().subscribe({
      next: resp=>{ this.elements = resp; this.hideSpinner()},
      error: error=>{
        /* TODO: manejo de error*/
        this.hideSpinner();
      }
    })
  }

  onEdit(element: Marca){
    this.titleForm     = 'editar';
    this.buttonForm    = 'Actualizar';
    this.elementSelected = element;
  }


}
