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

  @Input()  title: string                   = '';
  @Output() temp: any                       = new EventEmitter<any>();

  private elementService = inject(UnidadesMedidaService);
  private formBuilder = inject(FormBuilder);

  @Input() elementForm = this.formBuilder.group({
    idUnidadMedida:[ 0, [Validators.required]],
    unidadMedida:  [ '', [Validators.required]],
  })

  get idUnidadMedida(){ return this.elementForm.controls.idUnidadMedida; }
  get unidadMedida(){ return this.elementForm.controls.unidadMedida; }


  onSubmit(){ this.sweetConfirmCreateOrUpdate(this,'Crear Unidad de Medida Nueva'); }
  showSpinner(){ this.spinnerForm = true; }
  hideSpinner(){ this.spinnerForm = false; }
  getAll(){ this.temp.emit(null); }

  onReset(){
    this.elementForm.reset();
    this.titleForm = 'Agregar';
    this.buttonForm ='Grabar';
  }


}
