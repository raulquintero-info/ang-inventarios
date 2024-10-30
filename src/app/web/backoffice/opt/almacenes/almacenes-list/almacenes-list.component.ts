import { Component, OnInit, inject } from '@angular/core';
import { Almacen } from 'src/app/core/interfaces/almacen.interface';
import { AlmacenesService } from 'src/app/core/services/almacenes.service';
import { ALMACENES } from 'src/app/data/almacenes';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-almacenes-list',
  templateUrl: './almacenes-list.component.html',
  styleUrls: ['./almacenes-list.component.css']
})
export class AlmacenesListComponent implements OnInit {
  bottomBarSize = "48px";
  isMaximized = false;
  categorias: Almacen[] =[]; // = ALMACENES;
  categoria: Almacen = {idAlmacen: 0, nombreAlmacen: '', direccionAlmacen: '', responsableAlmacen:'',telefonoAlmacen: '' };


  private almacenesService = inject(AlmacenesService);

  ngOnInit(): void {

    this.getAll();
    this.categoria = {idAlmacen:0} as Almacen;

  }

  getAll(){
    this.almacenesService.getAll().subscribe({
      next: resp=>{
        this.categorias = resp;
        console.log('almacenes', this.categorias);
      },
      error: error=>{
        //TODO: manejo de errores
      }
    });
  }


  onEdit(cat: any){
    this.categoria = cat;
  }
  onDelete(id:number){

    Swal.fire({
      title: 'Eliminar Categoria',
      text: 'Desea Continuar?',
      // icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#641330',
      cancelButtonColor: '#949597',
      confirmButtonText: 'Si, Eliminar!'

    }).then( (result:any)=> {
      if (result.isConfirmed) {
        console.log('eliminar registro');

        this.almacenesService.delete(id).subscribe(
          resp=>{
            this.onReset();
            this.getAll();
            const Toast = Swal.mixin({
              toast: true,
              position: "bottom-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              }
            });
            Toast.fire({
              icon: "success",
              title: "Almacen Eliminada"
            });
          }

        )
      }


    })


  }
  onReset(){
    this.categoria = {idAlmacen:0} as Almacen;
  }

  onSubmit(){
    this.almacenesService.createOrUpdate(this.categoria).subscribe({
      next: resp=>{
        this.onReset();
        this.getAll();
        const Toast = Swal.mixin({
          toast: true,
          position: "bottom-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Registro Grabado"
        });
      },
      error: error=>{
        //todo: manejo de errores
      }
    })
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
