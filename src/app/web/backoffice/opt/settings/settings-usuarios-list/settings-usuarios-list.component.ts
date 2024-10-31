import { Component, inject } from '@angular/core';
import { User } from 'src/app/core/interfaces/usuario';
import { UsuariosService } from 'src/app/core/services/usuarios.service';

@Component({
  selector: 'app-settings-usuarios-list',
  templateUrl: './settings-usuarios-list.component.html',
  styleUrls: ['./settings-usuarios-list.component.css']
})
export class SettingsUsuariosListComponent {
  bottomBarSize = "48px";
  isMaximized = false;
  usuarios: User[]=[];
  usuario: User = {} as User;

  private usuariosService = inject(UsuariosService)

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.usuariosService.getAll().subscribe({
      next: resp=>{ this.usuarios = resp, console.log('usuarios', resp)},
      error: error=>{}
    })
  }

  onCategory(id: number){
    this.usuario= {username: '' } as User;
  }
  onEdit(cat: any){
    this.usuario = cat;
  }

  maximize(){
    this.bottomBarSize="200px";
    this.isMaximized = true;

  }
  minimize(){
    this.bottomBarSize="48px";
    this.isMaximized = false;

  }
}
