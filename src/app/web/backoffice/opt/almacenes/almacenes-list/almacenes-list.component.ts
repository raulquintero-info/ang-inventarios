import { Component, OnInit, inject } from '@angular/core';
import { Almacen } from 'src/app/core/interfaces/almacen.interface';
import { BaseComponent, cancelColor, confirmColor } from 'src/app/core/kernel/base-component';
import { AlmacenesService } from 'src/app/core/services/almacenes.service';

@Component({
  selector: 'app-almacenes-list',
  templateUrl: './almacenes-list.component.html',
  styleUrls: ['./almacenes-list.component.css']
})
export class AlmacenesListComponent extends BaseComponent implements OnInit {
  titleForm: string = '';
  buttonForm: string = '';
  categorias: Almacen[] = [];
  categoria: Almacen = { idAlmacen: 0, nombreAlmacen: '', direccionAlmacen: '', responsableAlmacen: '', telefonoAlmacen: '' };
  spinnerForm: boolean = false;


  private almacenesService = inject(AlmacenesService);

  ngOnInit(): void { this.getAll(); }
  showSpinner() { this.spinnerForm = true; }
  hideSpinner() { this.spinnerForm = false; }

  getAll() {
    this.almacenesService.getAll().subscribe({
      next: resp => { this.categorias = resp; },
      error: error => {
        //TODO: manejo de errores
      }
    });
  }

  onCreateOrUpdate() {
    this.showSpinner();
    this.sweetConfirmCreateOrUpdate(this, 'Crear Categoria Nueva', this.categoria);
  }

  onEdit(cat: any) {
    this.titleForm = 'Editar';
    this.buttonForm = 'Actualizar';
    this.categoria = cat;
  }

  onDelete(id: number) {
    this.showSpinner();
    this.sweetConfirmDelete(this, 'Eliminar Registro', id);
  }

  onReset() {
    this.categoria = { idAlmacen: 0 } as Almacen;
    this.titleForm = 'Agregar';
    this.buttonForm = 'Grabar';
  }


}
