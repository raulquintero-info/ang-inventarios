import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Proveedor } from 'src/app/core/interfaces/proveedor.interface';
import { BaseComponent } from 'src/app/core/kernel/base-component';
import { ProveedoresService } from 'src/app/core/services/proveedores.service';

@Component({
  selector: 'app-proveedor-form',
  templateUrl: './proveedor-form.component.html',
  styleUrls: ['./proveedor-form.component.css']
})
export class ProveedorFormComponent extends BaseComponent {
  spinnerForm: boolean = false;


   title: string             = 'Proveedor';
  // @Input()  elementSelected: Proveedor    = {} as Proveedor;
  @Output() temp: any                 = new EventEmitter<any>();


  private elementService = inject(ProveedoresService);
  private formBuilder = inject(FormBuilder);

  @Input() elementForm = this.formBuilder.group({
    idProveedor:[ 0, [Validators.required]],
    nombreProveedor:  [ '', [Validators.required]],
    direccionProveedor:  [ '', [Validators.required]],
    telefonoProveedor:  [ '', [Validators.required]],
    emailProveedor:  [ '', [Validators.required]],
  })

  get idProveedor(){ return this.elementForm.controls.idProveedor; }
  get nombreProveedor(){ return this.elementForm.controls.nombreProveedor; }
  get direccionProveedor(){ return this.elementForm.controls.direccionProveedor; }
  get telefonoProveedor(){ return this.elementForm.controls.telefonoProveedor; }
  get emailProveedor(){ return this.elementForm.controls.emailProveedor; }


  showSpinner(){ this.spinnerForm = true; }
  hideSpinner(){ this.spinnerForm = false; }
  getAll(){ this.temp.emit(null); }

  onSubmit(){
    let temp = this.elementForm.controls.idProveedor.getRawValue() ? true : false ;
    let titleDialog = (temp) ? 'Deseas Editar el Proveedor?' : 'Deseas Crear un Proveedor Nuevo?';
    this.sweetConfirmCreateOrUpdate(this, titleDialog);
  }

  onReset(){
    // this.elementSelected = {idProveedor:0} as Proveedor;
    this.elementForm.reset();
    this.elementForm.get('idProveedor')?.setValue(0);
  }

}
