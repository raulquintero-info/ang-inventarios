import { Component, OnInit, inject } from '@angular/core';
import { UnidadMedida } from 'src/app/core/interfaces/unidades-medida';
import { BaseComponent } from 'src/app/core/kernel/base-component';
import { UnidadesMedidaService } from 'src/app/core/services/unidades-medida.service';
import { ToastDef } from 'src/app/core/utils/sweetalert/sweetalert';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-unidades-medida-list',
  templateUrl: './unidades-medida-list.component.html',
  styleUrls: ['./unidades-medida-list.component.css']
})
export class UnidadesMedidaListComponent extends BaseComponent implements OnInit {
  title         = 'Unidades de Medida';
  elements: UnidadMedida [] = [];
  element: UnidadMedida = {unidadMedida: '' } as UnidadMedida;
  elementSelected: UnidadMedida = {idUnidadMedida: 0, unidadMedida: '' } as UnidadMedida;

  private genericservice = inject(UnidadesMedidaService);

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

  onEdit(element: UnidadMedida){
    this.titleForm     = 'editar';
    this.buttonForm    = 'Actualizar';
    this.elementSelected = element;
  }


  onDelete(id:number){
    Swal.fire({
      title: 'Eliminar Categoria',
      text: 'Desea Continuar?',
      confirmButtonText: 'Si, Eliminar!',
      confirmButtonColor: '#641330',
      cancelButtonColor: '#949597',
      // FIXME: corregir el uso de constante
      // confirmButtonColor: confirmColor,
      // cancelButtonColor: cancelColor,
      showCancelButton: true,
    }).then( (result:any)=> {
      if (result.isConfirmed) {
        this.genericservice.delete(id).subscribe(
          resp=>{
            this.getAll();
            ToastDef.fire({ icon: "success", title: "Almacen Eliminada" });
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
