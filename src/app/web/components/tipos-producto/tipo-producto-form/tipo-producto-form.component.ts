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
  @Input() titleForm   ='Agregar';
  @Input() buttonForm  = 'Grabar';

  @Input()  title: string             = 'TipoProducto';
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


  onSubmit(){ this.sweetConfirmCreateOrUpdate(this, this.titleForm + ' ' + this.title, this.elementSelected); }
  showSpinner(){ this.spinnerForm = true; }
  hideSpinner(){ this.spinnerForm = false; }
  getAll(){ this.temp.emit(null); }

  onReset(){
    this.elementSelected = {idTipoProducto:0} as TipoProducto;
    this.titleForm = 'Agregar';
    this.buttonForm ='Grabar';
    this.elementForm.reset()
  }

}
