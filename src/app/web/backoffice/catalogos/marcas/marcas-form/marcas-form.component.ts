import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Marca } from 'src/app/core/interfaces/marca.interface';
import { BaseComponent } from 'src/app/core/kernel/base-component';
import { MarcasService } from 'src/app/core/services/marcas.service';

@Component({
  selector: 'app-marcas-form',
  templateUrl: './marcas-form.component.html',
  styleUrls: ['./marcas-form.component.css']
})
export class MarcasFormComponent extends BaseComponent {
  spinnerForm: boolean = false;
  @Input() titleForm   ='Agregar';
  @Input() buttonForm  = 'Grabar';

  @Input()  title: string             = '';
  @Input()  elementSelected: Marca    = {} as Marca;
  @Output() temp: any                 = new EventEmitter<any>();


  private elementService = inject(MarcasService);

  getAll(){ this.temp.emit(null); }
  showSpinner(){ this.spinnerForm = true; }
  hideSpinner(){ this.spinnerForm = false; }

  onSubmit(){
    console.log('grabando');
    this.showSpinner();
    this.sweetConfirmCreateOrUpdate(this,'Crear Marca Nueva',this.elementSelected);
  }

  onReset(){
    this.elementSelected = {idMarca:0} as Marca;
    this.titleForm = 'Agregar';
    this.buttonForm ='Grabar';
  }


}
