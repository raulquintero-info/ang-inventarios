import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/core/interfaces/usuario';
import { BaseComponent } from 'src/app/core/kernel/base-component';
import { UsuariosService } from 'src/app/core/services/usuarios.service';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent extends BaseComponent implements OnInit {


  message: string = 'Procesando '
  title                   = 'atributo';
  elements: User []      = [];
  element: User          = {username: '', password: '' } as User;
  spinnerTable: boolean   = false

  private elementService  = inject(UsuariosService);
  private formBuilder = inject(FormBuilder);

  @Input() elementForm = this.formBuilder.group({
    idUsuario:[ 0, [Validators.required]],
    username:  [ '', [Validators.required]],
    password:  [ '', [Validators.required]],
  })

  get idUsuario(){ return this.elementForm.controls.idUsuario; }
  get nombre(){ return this.elementForm.controls.username; }
  get password(){ return this.elementForm.controls.password; }


  constructor(){ super(); }

  ngOnInit(): void {
    this.getAll();
  }

  onRow(id: number){ console.log('elementId', id) }
  onDelete(id:number){ this.sweetConfirmDelete(this, 'Desea borrar este ' + this.title, id); }
  updateElements(temp: any){ this.getAll() } //actualiza la lista desde el form
  hideSpinner(){ this.spinnerTable = false }
  showSpinner(){ this.spinnerTable = true }

  onEdit(element: User){
    this.elementForm.get('idUsuario')?.setValue(element.idUsuario);
    this.elementForm.get('username')?.setValue(element.username);
  }

  getAll(){
    this.showSpinner();
    this.elementService.getAll().subscribe({
      next: resp=>{ this.elements = resp; this.hideSpinner() },
      error: error=>{
        this.handleError(error);
        this.hideSpinner();
      }
    })
  }


}

