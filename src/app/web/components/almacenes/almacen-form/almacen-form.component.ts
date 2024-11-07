import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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
  title: string             = 'Almacen';

  @Input()  elementSelected: Almacen    = {} as Almacen;
  @Output() temp: any                 = new EventEmitter<any>();

  // public activeModal = inject(NgbActiveModal);
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


  showSpinner(){ this.spinnerForm = true; }
  hideSpinner(){ this.spinnerForm = false; }
  getAll(){ this.temp.emit(null); }

  onSubmit(){
    let temp = this.elementForm.controls.idAlmacen.getRawValue() ? true : false ;
    let titleDialog = (temp) ? 'Deseas Editar el Almacen?' : 'Deseas Crear un Almacen Nuevo?';
    this.sweetConfirmCreateOrUpdate(this, titleDialog);
  }

  onReset(){
    this.elementForm.reset()
    this.elementForm.get('idAlmacen')?.setValue(0);
    this.elementForm.untouched;
  }

  submitted(){
    this.onReset()
    this.getAll();
    this.hideSpinner();
    // this.activeModal.close('Close click')
  }
}
