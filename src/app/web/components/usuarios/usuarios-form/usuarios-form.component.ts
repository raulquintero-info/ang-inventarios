import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/core/interfaces/usuario';
import { BaseComponent } from 'src/app/core/kernel/base-component';
import { UsuariosService } from 'src/app/core/services/usuarios.service';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent extends BaseComponent {
  spinnerForm: boolean = false;


   title: string             = 'User';
  @Input()  elementSelected:  User  = {} as User;
  @Output() temp: any                 = new EventEmitter<any>();


  public activeModal = inject(NgbActiveModal);
  private elementService = inject(UsuariosService);
  private formBuilder = inject(FormBuilder);

  @Input() elementForm = this.formBuilder.group({
    idUsuario:[ 0, [Validators.required]],
    username:  [ '', [Validators.required]],
    password:  [ ''],
  })

  get idUsuario(){ return this.elementForm.controls.idUsuario; }
  get username(){ return this.elementForm.controls.username; }
  get password(){ return this.elementForm.controls.password; }


  showSpinner(){ this.spinnerForm = true; }
  hideSpinner(){ this.spinnerForm = false; }
  getAll(){ this.temp.emit(null); }

  onSubmit(){
    let temp = this.elementForm.controls.idUsuario.getRawValue() ? true : false ;
    let titleDialog = (temp) ? 'Deseas Editar el Usuario?' : 'Deseas Crear un Usuario Nuevo?';
    this.sweetConfirmCreateOrUpdate(this, titleDialog);
  }

  onReset(){
    this.elementForm.reset()
    this.elementForm.get('idUsuario')?.setValue(0);
  }

  submitted(){
    this.onReset()
    this.getAll();
    this.hideSpinner();
    this.activeModal.close('Close click')
  }

}
