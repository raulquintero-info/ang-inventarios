import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TipoProducto } from 'src/app/core/interfaces/tipo-producto.interface';
import { BaseComponent } from 'src/app/core/kernel/base-component';
import { TiposProductoService } from 'src/app/core/services/tiposProducto.service';

@Component({
  selector: 'app-tipo-producto-form',
  templateUrl: './tipo-producto-form.component.html',
  styleUrls: ['./tipo-producto-form.component.css']
})
export class TipoProductoFormComponent extends BaseComponent {
  spinnerForm: boolean = false;


   title: string             = 'TipoProducto';
  @Input()  elementSelected: TipoProducto   = {} as TipoProducto;
  @Output() temp: any                 = new EventEmitter<any>();


  private elementService = inject(TiposProductoService);
  private formBuilder = inject(FormBuilder);

  @Input() elementForm = this.formBuilder.group({
    idTipoProducto:[ 0, [Validators.required]],
    tipoProducto:  [ '', [Validators.required]],
    status:  [ false, [Validators.required]],
  })

  get idTipoProducto(){ return this.elementForm.controls.idTipoProducto; }
  get tipoProducto(){ return this.elementForm.controls.tipoProducto; }
  get status(){ return this.elementForm.controls.status; }


  showSpinner(){ this.spinnerForm = true; }
  hideSpinner(){ this.spinnerForm = false; }
  getAll(){ this.temp.emit(null); }

  onSubmit(){
    let temp = this.elementForm.controls.idTipoProducto.getRawValue() ? true : false ;
    let titleDialog = (temp) ? 'Deseas Editar el Tipo de Producto?' : 'Deseas Crear un Tipo de Producto Nuevo?';
    this.sweetConfirmCreateOrUpdate(this, titleDialog);
  }

  onReset(){
    this.elementSelected = {idTipoProducto:0} as TipoProducto;
    this.elementForm.reset();
    this.elementForm.get('idTipoProducto')?.setValue(0);

  }

  submitted(){
    this.onReset()
    this.getAll();
    this.hideSpinner();
  }

}
