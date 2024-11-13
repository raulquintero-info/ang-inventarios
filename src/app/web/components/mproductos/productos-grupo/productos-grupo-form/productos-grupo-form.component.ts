import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GrupoProducto } from 'src/app/core/interfaces/grupo-producto.interface';
import { BaseComponent } from 'src/app/core/kernel/base-component';
import { GrupoProductosService } from 'src/app/core/services/grupo-productos.service';

@Component({
  selector: 'app-productos-grupo-form',
  templateUrl: './productos-grupo-form.component.html',
  styleUrls: ['./productos-grupo-form.component.css']
})
export class ProductosGrupoFormComponent extends BaseComponent {
  spinnerForm: boolean = false;


  title: string             = 'Grupo de Productos';
  @Input()  elementSelected: GrupoProducto   = {} as GrupoProducto;
  @Output() temp: any                 = new EventEmitter<any>();


  private elementService = inject(GrupoProductosService);
  private formBuilder = inject(FormBuilder);

  @Input() elementForm = this.formBuilder.group({
    idGrupoProducto:[ 0, [Validators.required]],
    nombreGrupoProducto:  [ '', [Validators.required]],
    // valorAtrib:  [ '', [Validators.required]],
    // productoId:  [ 1, [Validators.required]],
  })

  get idGrupoProducto(){ return this.elementForm.controls.idGrupoProducto; }
  get nombreGrupoProducto(){ return this.elementForm.controls.nombreGrupoProducto; }
  // get valorAtributo(){ return this.elementForm.controls.valorAtributo; }
  // get productoId(){ return this.elementForm.controls.productoId; }


  showSpinner(){ this.spinnerForm = true; }
  hideSpinner(){ this.spinnerForm = false; }
  getAll(){ this.temp.emit(null); }

  onSubmit(){
    let temp = this.elementForm.controls.idGrupoProducto.getRawValue() ? true : false ;
    let titleDialog = (temp) ? 'Deseas Editar el atributo?' : 'Deseas Crear un Atributo Nuevo?';
    this.sweetConfirmCreateOrUpdate(this, titleDialog);
  }

  onReset(){
    this.elementForm.reset()
    this.elementForm.get('idGrupoProducto')?.setValue(0);
    this.elementForm.get('nombreGrupoProducto')?.setValue('');
  }

  submitted(){
    this.onReset()
    this.getAll();
    this.hideSpinner();
  }

}
