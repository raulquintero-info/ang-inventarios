import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TipoProducto } from 'src/app/core/interfaces/tipo-producto.interface';
import { BaseComponent } from 'src/app/core/kernel/base-component';
import { TiposProductoService } from 'src/app/core/services/tiposProducto.service';

@Component({
  selector: 'app-tipos-producto-list',
  templateUrl: './tipos-producto-list.component.html',
  styleUrls: ['./tipos-producto-list.component.css']
})
export class TiposProductoListComponent extends BaseComponent implements OnInit {


  message: string = 'Procesando '
  title                   = 'Tipo Producto';
  elements: TipoProducto []      = [];
  element: TipoProducto          = {tipoProducto: '' } as TipoProducto;
  spinnerTable: boolean   = false


  private elementService  = inject(TiposProductoService);
  private formBuilder = inject(FormBuilder);


  @Input() elementForm = this.formBuilder.group({
    idTipoProducto:[ 0, [Validators.required]],
    tipoProducto:  [ '', [Validators.required]],
    status:  [ false, [Validators.required]],
  })

  get idTipoProducto(){ return this.elementForm.controls.idTipoProducto; }
  get tipoProducto(){ return this.elementForm.controls.tipoProducto; }
  get status(){ return this.elementForm.controls.status; }



  constructor(){ super(); }

  ngOnInit(): void {
    this.getAll();
  }

  onRow(id: number){ console.log('elementId', id) }
  onDelete(id:number){ this.sweetConfirmDelete(this, 'Desea borrar este ' + this.title, id); }
  updateElements(temp: any){ this.getAll() } //actualiza la lista desde el form
  hideSpinner(){ this.spinnerTable = false }
  showSpinner(){ this.spinnerTable = true }

  onEdit(element: TipoProducto){
    this.elementForm.get('idTipoProducto')?.setValue(element.idTipoProducto);
    this.elementForm.get('tipoProducto')?.setValue(element.tipoProducto);
    this.elementForm.get('status')?.setValue(element.status);
  }

  getAll(){
    this.showSpinner();
    this.elementService.getAll().subscribe({
      next: resp=>{ this.elements = resp; this.hideSpinner()},
      error: error=>{
        this.handleError(error);
        this.hideSpinner();
      }
    })
  }


}

