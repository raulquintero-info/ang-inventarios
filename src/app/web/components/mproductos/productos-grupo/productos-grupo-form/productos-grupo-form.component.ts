import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GrupoProducto } from 'src/app/core/interfaces/grupo-producto.interface';
import { BaseComponent } from 'src/app/core/kernel/base-component';
import { GrupoProductosService } from 'src/app/core/services/grupo-productos.service';

@Component({
  selector: 'app-productos-grupo-form',
  templateUrl: './productos-grupo-form.component.html',
  styleUrls: ['./productos-grupo-form.component.css']
})
export class ProductosGrupoFormComponent extends BaseComponent {
  spinnerForm: boolean = false;
  showGrupoForm: boolean = false;

  title: string             = 'Grupo de Productos';
  @Input()  elementSelected: GrupoProducto   = {} as GrupoProducto;
  @Output() temp: any                 = new EventEmitter<any>();


  private elementService = inject(GrupoProductosService);
  private formBuilder = inject(FormBuilder);

  @Input() elementForm = this.formBuilder.group({
    idGrupo:[ 0, [Validators.required]],
    nombreGrupo:  [ '', [Validators.required]],
    status:  [ true, [Validators.required]],
    // productoId:  [ 1, [Validators.required]],
  })

  get idGrupo(){ return this.elementForm.controls.idGrupo; }
  get nombreGrupo(){ return this.elementForm.controls.nombreGrupo; }
  get status(){ return this.elementForm.controls.status; }
  // get productoId(){ return this.elementForm.controls.productoId; }


  showSpinner(){ this.spinnerForm = true; }
  hideSpinner(){ this.spinnerForm = false; }
  getAll(){ this.temp.emit(null); }
  onShowGrupoForm(){this.showGrupoForm = true}
  onCancelGrupoForm(){this.showGrupoForm = false}

  onSubmit(){
    let temp = this.elementForm.controls.idGrupo.getRawValue() ? true : false ;
    let titleDialog = (temp) ? 'Deseas Editar el Grupo?' : 'Deseas Crear un Grupo Nuevo?';
    this.sweetConfirmCreateOrUpdate(this, titleDialog);
  }

  onReset(){
    this.elementForm.reset()
    this.elementForm.get('idGrupo')?.setValue(0);
    this.elementForm.get('nombreGrupo')?.setValue('');
    this.elementForm.get('status')?.setValue(true);
  }

  submitted(){
    this.onReset()
    this.getAll();
    this.hideSpinner();
  }

}
