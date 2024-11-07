import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UnidadMedida } from 'src/app/core/interfaces/unidades-medida';
import { BaseComponent } from 'src/app/core/kernel/base-component';
import { UnidadesMedidaService } from 'src/app/core/services/unidades-medida.service';
import { ToastDef } from 'src/app/core/utils/sweetalert/sweetalert';

@Component({
  selector: 'app-unidades-medida-list',
  templateUrl: './unidades-medida-list.component.html',
  styleUrls: ['./unidades-medida-list.component.css']
})
export class UnidadesMedidaListComponent  extends BaseComponent implements OnInit {


  message: string = 'Procesando '
  title                   = 'unidad de medida';
  elements: UnidadMedida []      = [];
  element: UnidadMedida          = {unidadMedida: '' } as UnidadMedida;
  // elementSelected: UnidadMedida  = {idUnidadMedida: 0, unidadMedida: '' } as UnidadMedida;
  spinnerTable: boolean   = false


  private elementService  = inject(UnidadesMedidaService);
  private formBuilder = inject(FormBuilder);

  elementForm = this.formBuilder.group({
    idUnidadMedida:[ 0, [Validators.required]],
    unidadMedida:  [ '', [Validators.required]],
  })

  constructor(){ super(); }

  ngOnInit(): void {
    this.getAll();
  }

  onRow(id: number){ console.log('elementId', id) }
  onDelete(id:number){ this.sweetConfirmDelete(this,'Desea borrar esta ' + this.title, id); }
  updateElements(temp: any){ this.getAll() } //actualiza la lista desde la forma
  hideSpinner(){ this.spinnerTable = false }
  showSpinner(){ this.spinnerTable = true }

  onEdit(element: UnidadMedida){
    this.elementForm.get('idUnidadMedida')?.setValue(element.idUnidadMedida);
    this.elementForm.get('unidadMedida')?.setValue(element.unidadMedida);
  }

  getAll(){
    this.showSpinner();
    this.elementService.getAll().subscribe({
      next: resp=>{
        this.elements = resp;
        this.hideSpinner()},
      error: error=>{
        ToastDef.fire({ icon: "error", title: "Error al obtener la lista de registros" });
        this.hideSpinner();
      }
    });
  }


}
