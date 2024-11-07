import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Atributo } from 'src/app/core/interfaces/atributo.interface';
import { BaseComponent } from 'src/app/core/kernel/base-component';
import { AtributosService } from 'src/app/core/services/atributos.service';

@Component({
  selector: 'app-atributos-form',
  templateUrl: './atributos-form.component.html',
  styleUrls: ['./atributos-form.component.css']
})
export class AtributosFormComponent extends BaseComponent {
  spinnerForm: boolean = false;


  title: string             = 'Atributo';
  @Input()  elementSelected: Atributo   = {} as Atributo;
  @Output() temp: any                 = new EventEmitter<any>();


  private elementService = inject(AtributosService);
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


  showSpinner(){ this.spinnerForm = true; }
  hideSpinner(){ this.spinnerForm = false; }
  getAll(){ this.temp.emit(null); }

  onSubmit(){
    let temp = this.elementForm.controls.idAtributo.getRawValue() ? true : false ;
    let titleDialog = (temp) ? 'Deseas Editar el atributo?' : 'Deseas Crear un Atributo Nuevo?';
    this.sweetConfirmCreateOrUpdate(this, titleDialog);
  }

  onReset(){
    this.elementForm.reset()
    this.elementForm.get('idAtributo')?.setValue(0);
    this.elementForm.get('nombreAtributo')?.setValue('');
  }

}
