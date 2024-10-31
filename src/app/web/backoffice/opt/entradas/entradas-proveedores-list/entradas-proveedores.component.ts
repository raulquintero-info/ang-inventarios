import { Component, OnInit, inject } from '@angular/core';
import { PROVEEDORES } from 'src/app/data/proveedores';
import { CATEGORIASTABLE } from './categorias';
import { ProveedoresService } from '../../../../../core/services/proveedores.service';
import { Proveedor } from 'src/app/core/interfaces/proveedor.interface';

@Component({
  selector: 'app-entradas-proveedores',
  templateUrl: './entradas-proveedores.component.html',
  styleUrls: ['./entradas-proveedores.component.css']
})
export class EntradasProveedoresComponent implements OnInit {
  bottomBarSize = "48px";
  isMaximized = false;
  proveedores: Proveedor[] = [];
  categorias = CATEGORIASTABLE[0];
  categoria: any = {nombre: '', folder: false };

  private proveedoresService = inject(ProveedoresService);

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.proveedoresService.getAll().subscribe({
      next: resp=>{ this.proveedores = resp, console.log('proveedores', resp)},
      error: error=>{}
    })
  }

  onCategory(id: number){
    console.log(id,CATEGORIASTABLE[id])
    this.categorias = CATEGORIASTABLE[id];
    this.categoria= {nombre: '', folder: false };
  }
  onEdit(cat: any){
    this.categoria = cat;
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
