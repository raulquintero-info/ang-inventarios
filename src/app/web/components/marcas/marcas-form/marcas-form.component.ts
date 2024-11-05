import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Marca } from 'src/app/core/interfaces/marca.interface';
import { BaseComponent } from 'src/app/core/kernel/base-component';
import { MarcasService } from 'src/app/core/services/marcas.service';

@Component({
  selector: 'app-marcas-form',
  templateUrl: './marcas-form.component.html',
  styleUrls: ['./marcas-form.component.css']
})
export class MarcasFormComponent extends BaseComponent {
  spinnerForm: boolean = false;
  @Input() titleForm   ='Agregar';
  @Input() buttonForm  = 'Grabar';

  @Input()  title: string             = '';
  @Output() temp: any                 = new EventEmitter<any>();


  private elementService = inject(MarcasService);
  private formBuilder = inject(FormBuilder);


  @Input() elementForm = this.formBuilder.group({
    idMarca:[ 0, [Validators.required]],
    marca:  [ '', [Validators.required]],
  })

  get idMarca(){ return this.elementForm.controls.idMarca; }
  get marca(){ return this.elementForm.controls.marca; }

  showSpinner(){ this.spinnerForm = true; }
  hideSpinner(){ this.spinnerForm = false; }
  getAll(){ this.temp.emit(null); }

  onSubmit(){
    let titleConfirmDialog = (this.elementForm.value.idMarca ? 'Editar Marca' : 'Crear Marca Nueva');
    if(this.elementForm.valid){
      this.sweetConfirmCreateOrUpdate(this, titleConfirmDialog);
    } else {
      this.elementForm.markAllAsTouched();
    }
   }

  onReset(){
    this.elementForm.get('idMarca')?.setValue(0);
    this.elementForm.get('marca')?.setValue('');
    this.titleForm = 'Agregar';
    this.buttonForm ='Grabar';
    this.elementForm.reset();
    this.elementForm.get('idMarca')?.setValue(0);



  }


}
