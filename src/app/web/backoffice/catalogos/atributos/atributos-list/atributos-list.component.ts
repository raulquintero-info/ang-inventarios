import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Atributo } from 'src/app/core/interfaces/atributo.interface';
import { BaseComponent, ToastDef } from 'src/app/core/kernel/base-component';
import { AtributosService } from 'src/app/core/services/atributos.service';

@Component({
  selector: 'app-atributos-list',
  templateUrl: './atributos-list.component.html',
  styleUrls: ['./atributos-list.component.css']
})
export class AtributosListComponent extends BaseComponent implements OnInit {
  titleForm: string = 'Agregar';
  buttonForm: string = 'Grabar';
  message: string = 'Procesando '
  title                   = 'atributo';
  elements: Atributo []      = [];
  element: Atributo          = {nombreAtributo: '' } as Atributo;
  spinnerTable: boolean   = false


  private elementService  = inject(AtributosService);
  private formBuilder = inject(FormBuilder);


  @Input() elementForm = this.formBuilder.group({
    idAtributo:[ 0, [Validators.required]],
    nombreAtributo:  [ '', [Validators.required]],
    valorAtributo:  [ '', [Validators.required]],
    productoId:  [ 1, [Validators.required]],
  })

  get idAtributo(){ return this.elementForm.controls.idAtributo; }
  get nombreAtributo(){ return this.elementForm.controls.nombreAtributo; }
  get valorAtributo(){ return this.elementForm.controls.valorAtributo; }
  get productoId(){ return this.elementForm.controls.productoId; }


  constructor(){ super(); }

  ngOnInit(): void {
    this.getAll();
  }

  onEdit(element: Atributo){
    this.titleForm     = 'editar';
    this.buttonForm    = 'Actualizar';
    this.elementForm.get('idAtributo')?.setValue(element.idAtributo);
    this.elementForm.get('nombreAtributo')?.setValue(element.nombreAtributo);

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

        this.handleError(error);
        this.hideSpinner();
      }
    })
  }


}

