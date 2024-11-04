import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Marca } from 'src/app/core/interfaces/marca.interface';
import { BaseComponent, ToastDef, cancelColor, confirmColor } from 'src/app/core/kernel/base-component';
import { MarcasService } from 'src/app/core/services/marcas.service';

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
  spinnerTable: boolean   = false


  private elementService  = inject(MarcasService);
  private formBuilder = inject(FormBuilder);

  elementForm = this.formBuilder.group({
    idMarca:[ 0, [Validators.required]],
    marca:  [ '', [Validators.required]],
  })

  constructor(){ super(); }

  ngOnInit(): void {
    this.getAll();
  }

  onEdit(element: Marca){
    this.titleForm     = 'editar';
    this.buttonForm    = 'Actualizar';
    this.elementForm.get('idMarca')?.setValue(element.idMarca);
    this.elementForm.get('marca')?.setValue(element.marca);

  }

  onRow(id: number){ console.log('elementId', id) }
  onDelete(id:number){ this.sweetConfirmDelete(this,'',id); }
  updateElements(temp: any){ this.getAll() } //actualiza la lista desde el form
  hideSpinner(){ this.spinnerTable = false }
  showSpinner(){ this.spinnerTable = true }

  getAll(){
    this.showSpinner();
    this.elementService.getAll().subscribe({
      next: resp=>{ this.elements = resp; this.hideSpinner()},
      error: error=>{
        ToastDef.fire({ icon: "error", title: "Error al obtener la lista de registros" });
        this.hideSpinner();
      }
    })
  }




}
