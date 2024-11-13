import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { UnidadMedida } from 'src/app/core/interfaces/unidades-medida';
import { BaseComponent } from 'src/app/core/kernel/base-component';
import { UnidadesMedidaService } from 'src/app/core/services/unidades-medida.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-unidades-medida-form',
  templateUrl: './unidades-medida-form.component.html',
  styleUrls: ['./unidades-medida-form.component.css']
})
export class UnidadesMedidaFormComponent extends BaseComponent {
  spinnerForm: boolean                      = false;
  @Input() titleForm                        ='Agregar';
  @Input() buttonForm                       = 'Grabar';

   title: string                   = '';
  @Output() temp: any                       = new EventEmitter<any>();

  private elementService = inject(UnidadesMedidaService);
  private formBuilder = inject(FormBuilder);

  @Input() elementForm = this.formBuilder.group({
    idUnidadMedida:[ 0, [Validators.required]],
    unidadMedida:  [ '', [Validators.required]],
  })

  get idUnidadMedida(){ return this.elementForm.controls.idUnidadMedida; }
  get unidadMedida(){ return this.elementForm.controls.unidadMedida; }

  showSpinner(){ this.spinnerForm = true; }
  hideSpinner(){ this.spinnerForm = false; }
  getAll(){ this.temp.emit(null); }

  onSubmit(){
    let temp = this.elementForm.controls.idUnidadMedida.getRawValue() ? true : false ;
    let titleDialog = (temp) ? 'Deseas Editar la Unidad de Medida?' : 'Deseas Crear una Unidad de Medida Nueva?';
    this.sweetConfirmCreateOrUpdate(this, titleDialog );
  }

  onReset(){
    this.elementForm.reset();
    this.elementForm.reset();
    this.elementForm.get('idUnidadMedida')?.setValue(0);
  }


  submitted(){
    this.onReset()
    this.getAll();
    this.hideSpinner();
  }

}
