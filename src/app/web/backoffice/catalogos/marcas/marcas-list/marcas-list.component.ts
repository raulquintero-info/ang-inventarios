import { Component, OnInit, inject } from '@angular/core';
import { Marca } from 'src/app/core/interfaces/marca.interface';
import { BaseComponent, cancelColor, confirmColor } from 'src/app/core/kernel/base-component';
import { MarcasService } from 'src/app/core/services/marcas.service';
import { ToastDef } from 'src/app/core/utils/sweetalert/sweetalert';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-marcas-list',
  templateUrl: './marcas-list.component.html',
  styleUrls: ['./marcas-list.component.css']
})
export class MarcasListComponent extends BaseComponent implements OnInit {
  title         = 'marcas';
  elements: Marca [] = [];
  element: Marca = {marca: '' } as Marca;
  elementSelected: Marca = {idMarca: 0, marca: '' } as Marca;

  private genericservice = inject(MarcasService);

  ngOnInit(): void {
    this.getAll();
  }

  updateElements(temp: any){ this.getAll() }
  onRow(id: number){ console.log('elementId', id) }
  onSubmit(element: any){ this.elementSelected = element; }

  getAll(){
    this.genericservice.getAll().subscribe({
      next: resp=>{ this.elements = resp; },
      error: error=>{
        /* TODO: manejo de error*/
      }
    })
  }

  onEdit(element: Marca){
    this.titleForm     = 'editar';
    this.buttonForm    = 'Actualizar';
    this.elementSelected = element;
  }


  onDelete(id:number){
    Swal.fire({
      title: 'Eliminar Registro',
      text: 'Desea Continuar?',
      confirmButtonText: 'Si, Eliminar!',
      confirmButtonColor: confirmColor,
      cancelButtonColor: cancelColor,
      showCancelButton: true,
    }).then( (result:any)=> {
      if (result.isConfirmed) {
        this.genericservice.delete(id).subscribe(
          resp=>{
            this.getAll();
            ToastDef.fire({ icon: "success", title: "Registro Eliminada" });
          },
          error=>{
            this.getAll();
            //TODO: la respuesta de la api no viene en un json
            ToastDef.fire({ icon: "error", title: "No se pudo Borrar el Registro  " });
          }
        )
      }
    });
  }
}
