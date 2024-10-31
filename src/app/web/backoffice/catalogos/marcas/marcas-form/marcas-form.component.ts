import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Marca } from 'src/app/core/interfaces/marca.interface';
import { MarcasService } from 'src/app/core/services/marcas.service';

@Component({
  selector: 'app-marcas-form',
  templateUrl: './marcas-form.component.html',
  styleUrls: ['./marcas-form.component.css']
})
export class MarcasFormComponent {
  @Input() titleForm   ='Agregar';
  @Input() buttonForm  = 'Grabar';

  @Input()  title: string             = '';
  @Input()  elementSelected: Marca    = {} as Marca;
  @Output() temp: any                 = new EventEmitter<any>();


  private marcasService = inject(MarcasService);

  onSubmit(){
    console.log('grabando')
    this.marcasService.createOrUpdate(this.elementSelected).subscribe({
      next: resp=>{this.temp.emit(1);console.log(resp); this.onReset()},
      error: error=>{console.log(error)}
    })
  }

  onReset(){
    this.elementSelected = {idMarca:0} as Marca;
    this.titleForm = 'Agregar';
    this.buttonForm ='Grabar';
  }

}
