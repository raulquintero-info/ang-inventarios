import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  @Input() titleForm   ='Agregar';
  @Input() buttonForm  = 'Grabar';

  @Input()  title: string             = 'User';
  @Input()  elementSelected:  User  = {} as User;
  @Output() temp: any                 = new EventEmitter<any>();


  private elementService = inject(UsuariosService);
  private formBuilder = inject(FormBuilder);

  @Input() elementForm = this.formBuilder.group({
    idUsuario:[ 0, [Validators.required]],
    username:  [ '', [Validators.required]],
    password:  [ '', [Validators.required]],
    // productoId:  [ '', [Validators.required]],
  })

  get idUsuario(){ return this.elementForm.controls.idUsuario; }
  get username(){ return this.elementForm.controls.username; }
  get password(){ return this.elementForm.controls.password; }
  // get productoId(){ return this.elementForm.controls.productoId; }


  onSubmit(){ this.sweetConfirmCreateOrUpdate(this, this.titleForm + ' ' + this.title, this.elementSelected); }
  showSpinner(){ this.spinnerForm = true; }
  hideSpinner(){ this.spinnerForm = false; }
  getAll(){ this.temp.emit(null); }

  onReset(){
    this.titleForm = 'Agregar';
    this.buttonForm ='Grabar';
    this.elementForm.reset()
    this.elementForm.get('idUsuario')?.setValue(0);
    this.elementForm.get('username')?.setValue('');
    this.elementForm.get('password')?.setValue('');
  }

}
