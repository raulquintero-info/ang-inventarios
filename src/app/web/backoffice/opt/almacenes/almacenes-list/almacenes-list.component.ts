import { Component, OnInit, inject } from '@angular/core';
import { Almacen } from 'src/app/core/interfaces/almacen.interface';
import { BaseComponent, cancelColor, confirmColor } from 'src/app/core/kernel/base-component';
import { AlmacenesService } from 'src/app/core/services/almacenes.service';
import { ToastDef } from 'src/app/core/utils/sweetalert/sweetalert';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-almacenes-list',
  templateUrl: './almacenes-list.component.html',
  styleUrls: ['./almacenes-list.component.css']
})
export class AlmacenesListComponent extends BaseComponent implements OnInit {
  categorias: Almacen[] = [];
  categoria: Almacen = { idAlmacen: 0, nombreAlmacen: '', direccionAlmacen: '', responsableAlmacen: '', telefonoAlmacen: '' };


  private almacenesService = inject(AlmacenesService);

  ngOnInit(): void {

    this.getAll();
    this.categoria = { idAlmacen: 0 } as Almacen;

  }

  getAll() {
    this.almacenesService.getAll().subscribe({
      next: resp => { this.categorias = resp; },
      error: error => {
        //TODO: manejo de errores
      }
    });
  }

  onEdit(cat: any) {
    this.titleForm = 'Editar';
    this.buttonForm = 'Actualizar';
    this.categoria = cat;
  }

  onDelete(id: number) {
    Swal.fire({
      title: 'Eliminar Categoria',
      text: 'Desea Continuar?',
      confirmButtonText: 'Si, Eliminar!',
      confirmButtonColor: confirmColor,
      cancelButtonColor: cancelColor,
      showCancelButton: true,

    }).then((result: any) => {
      if (result.isConfirmed) {
        this.almacenesService.delete(id).subscribe(
          resp => {
            this.onReset(); this.getAll();
            ToastDef.fire({ icon: "warning", title: "Almacen Eliminada" });
          }
        )
      }
    })


  }
  onReset() {
    this.categoria = { idAlmacen: 0 } as Almacen;
    this.titleForm = 'Agregar';
    this.buttonForm = 'Grabar';
  }

  onSubmit() {
    this.almacenesService.createOrUpdate(this.categoria).subscribe({
      next: resp => {
        this.onReset(); this.getAll();
        ToastDef.fire({ icon: "success", title: "Registro Grabado" });
      },
      error: error => {/* TODO: manejo de errores */ }
    })
  }


}
