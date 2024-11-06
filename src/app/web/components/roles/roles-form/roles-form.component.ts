import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Rol } from 'src/app/core/interfaces/rol.interface';
import { BaseComponent } from 'src/app/core/kernel/base-component';
import { RolesService } from 'src/app/core/services/roles.service';

@Component({
  selector: 'app-roles-form',
  templateUrl: './roles-form.component.html',
  styleUrls: ['./roles-form.component.css']
})
export class RolesFormComponent extends BaseComponent {
  spinnerForm: boolean = false;
  @Input() titleForm   ='Agregar';
  @Input() buttonForm  = 'Grabar';

  @Input()  title: string             = 'Rol';
  @Input()  elementSelected: Rol   = {} as Rol;
  @Output() temp: any                 = new EventEmitter<any>();


  private elementService = inject(RolesService);
  private formBuilder = inject(FormBuilder);

  @Input() elementForm = this.formBuilder.group({
    idRol:[ 0, [Validators.required]],
    nombre:  [ '', [Validators.required]],
    // valorRol:  [ '', [Validators.required]],
    // productoId:  [ '', [Validators.required]],
  })

  get idRol(){ return this.elementForm.controls.idRol; }
  get nombre(){ return this.elementForm.controls.nombre; }
  // get valorRol(){ return this.elementForm.controls.valorRol; }
  // get productoId(){ return this.elementForm.controls.productoId; }


  onSubmit(){ this.sweetConfirmCreateOrUpdate(this, this.titleForm + ' ' + this.title, this.elementSelected); }
  showSpinner(){ this.spinnerForm = true; }
  hideSpinner(){ this.spinnerForm = false; }
  getAll(){ this.temp.emit(null); }

  onReset(){
    this.titleForm = 'Agregar';
    this.buttonForm ='Grabar';
    this.elementForm.reset()
    this.elementForm.get('idRol')?.setValue(0);
    this.elementForm.get('nombre')?.setValue('');
  }

}