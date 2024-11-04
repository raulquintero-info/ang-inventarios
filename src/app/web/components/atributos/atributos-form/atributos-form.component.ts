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
  @Input() titleForm   ='Agregar';
  @Input() buttonForm  = 'Grabar';

  @Input()  title: string             = 'Atributo';
  @Input()  elementSelected: Atributo   = {} as Atributo;
  @Output() temp: any                 = new EventEmitter<any>();


  private elementService = inject(AtributosService);
  private formBuilder = inject(FormBuilder);

  @Input() elementForm = this.formBuilder.group({
    idAtributo:[ 0, [Validators.required]],
    nombreAtributo:  [ '', [Validators.required]],
    valorAtributo:  [ '', [Validators.required]],
    productoId:  [ '', [Validators.required]],
  })

  get idAtributo(){ return this.elementForm.controls.idAtributo; }
  get nombreAtributo(){ return this.elementForm.controls.nombreAtributo; }
  get valorAtributo(){ return this.elementForm.controls.valorAtributo; }
  get productoId(){ return this.elementForm.controls.productoId; }


  onSubmit(){ this.sweetConfirmCreateOrUpdate(this, this.titleForm + ' ' + this.title, this.elementSelected); }
  showSpinner(){ this.spinnerForm = true; }
  hideSpinner(){ this.spinnerForm = false; }
  getAll(){ this.temp.emit(null); }

  onReset(){
    this.elementSelected = {idAtributo:0} as Atributo;
    this.titleForm = 'Agregar';
    this.buttonForm ='Grabar';
    this.elementForm.reset()
  }

}
