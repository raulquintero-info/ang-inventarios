import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Rol } from 'src/app/core/interfaces/rol.interface';
import { BaseComponent } from 'src/app/core/kernel/base-component';
import { RolesService } from 'src/app/core/services/roles.service';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent extends BaseComponent implements OnInit {
  titleForm: string = 'Agregar';
  buttonForm: string = 'Grabar';
  message: string = 'Procesando '
  title                   = 'atributo';
  elements: Rol []      = [];
  element: Rol          = {nombre: '' } as Rol;
  spinnerTable: boolean   = false


  private elementService  = inject(RolesService);
  private formBuilder = inject(FormBuilder);


  @Input() elementForm = this.formBuilder.group({
    idRol:[ 0, [Validators.required]],
    nombre:  [ '', [Validators.required]],
    // valorRol:  [ '', [Validators.required]],
    // productoId:  [ '', [Validators.required]],
  })

  get idRol(){ return this.elementForm.controls.idRol; }
  get nombre(){ return this.elementForm.controls.nombre; }
  // get valorRol(){ return this.elementForm.controls.valorRol; }
  // get productoId(){ return this.elementForm.controls.productoId; }


  constructor(){ super(); }

  ngOnInit(): void {
    this.getAll();
  }

  onEdit(element: Rol){
    this.titleForm     = 'editar';
    this.buttonForm    = 'Actualizar';
    this.elementForm.get('idRol')?.setValue(element.idRol);
    this.elementForm.get('nombre')?.setValue(element.nombre);

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
