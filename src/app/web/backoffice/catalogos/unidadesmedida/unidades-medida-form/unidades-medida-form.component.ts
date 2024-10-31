import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { UnidadMedida } from 'src/app/core/interfaces/unidades-medida';
import { UnidadesMedidaService } from 'src/app/core/services/unidades-medida.service';

@Component({
  selector: 'app-unidades-medida-form',
  templateUrl: './unidades-medida-form.component.html',
  styleUrls: ['./unidades-medida-form.component.css']
})
export class UnidadesMedidaFormComponent {
  @Input() titleForm   ='Agregar';
  @Input() buttonForm  = 'Grabar';

  @Input()  title: string             = '';
  @Input()  elementSelected: UnidadMedida    = {} as UnidadMedida;
  @Output() temp: any                 = new EventEmitter<any>();


  private elementsService = inject(UnidadesMedidaService);

  onSubmit(){
    console.log('grabando')
    this.elementsService.createOrUpdate(this.elementSelected).subscribe({
      next: resp=>{this.temp.emit(1);console.log(resp); this.onReset()},
      error: error=>{console.log(error)}
    })
  }

  onReset(){
    this.elementSelected = {idUnidadMedida:0} as UnidadMedida;
    this.titleForm = 'Agregar';
    this.buttonForm ='Grabar';
  }

}
