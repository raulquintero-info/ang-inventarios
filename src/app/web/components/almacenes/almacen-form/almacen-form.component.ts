import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Almacen } from 'src/app/core/interfaces/almacen.interface';
import { BaseComponent } from 'src/app/core/kernel/base-component';
import { AlmacenesService } from 'src/app/core/services/almacenes.service';

@Component({
  selector: 'app-almacen-form',
  templateUrl: './almacen-form.component.html',
  styleUrls: ['./almacen-form.component.css']
})
export class AlmacenFormComponent extends BaseComponent {
  spinnerForm: boolean = false;
  @Input() titleForm   ='Agregar';
  @Input() buttonForm  = 'Grabar';

  @Input()  title: string             = 'Almacen';
  @Input()  elementSelected: Almacen    = {} as Almacen;
  @Output() temp: any                 = new EventEmitter<any>();


  private elementService = inject(AlmacenesService);
  private formBuilder = inject(FormBuilder);

  @Input() elementForm = this.formBuilder.group({
    idAlmacen:[ 0, [Validators.required]],
    nombreAlmacen:  [ '', [Validators.required]],
    direccionAlmacen:  [ '', [Validators.required]],
    telefonoAlmacen:  [ '', [Validators.required]],
    responsableAlmacen:  [ '', [Validators.required]],
  })

  get idAlmacen(){ return this.elementForm.controls.idAlmacen; }
  get nombreAlmacen(){ return this.elementForm.controls.nombreAlmacen; }
  get direccionAlmacen(){ return this.elementForm.controls.direccionAlmacen; }
  get telefonoAlmacen(){ return this.elementForm.controls.telefonoAlmacen; }
  get responsableAlmacen(){ return this.elementForm.controls.responsableAlmacen; }


  onSubmit(){ this.sweetConfirmCreateOrUpdate(this, this.titleForm + ' ' + this.title, this.elementSelected); }
  showSpinner(){ this.spinnerForm = true; }
  hideSpinner(){ this.spinnerForm = false; }
  getAll(){ this.temp.emit(null); }

  onReset(){
    this.titleForm = 'Agregar';
    this.buttonForm ='Grabar';
    this.elementForm.reset()
    this.elementForm.get('idAlmacen')?.setValue(0);
    this.elementForm.untouched;
  }

}
{

}
