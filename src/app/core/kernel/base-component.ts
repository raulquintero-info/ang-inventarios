import { Input } from "@angular/core";
import Swal from "sweetalert2";

export const confirmColor = '#641330';
export const cancelColor = '#949597';

export const ToastDef = Swal.mixin({
  toast: true,
  position: "bottom-end",
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast',
  },
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

export class BaseComponent {
  public isMaximized: boolean = false;
  public sizeMinimized: string = '48px';
  // si quiere cambiar el tamaño de la ventana,sobreescriba este atributo
  // con el nuevo tamaño
  public sizeMaximized: string = "200px"
  public bottomBarSize: string = this.sizeMinimized;



  // setTitleForm(text: string){
  //   this.titleForm = text;
  // }

  maximize() { this.bottomBarSize = this.sizeMaximized; this.isMaximized = true; }
  minimize() { this.bottomBarSize = this.sizeMinimized; this.isMaximized = false; }

  //TODO: cambiar sweetalerts a esta clase

  public sweetConfirmDelete(
    objeto: any, title: string, id: number,
    confirmCol: string = confirmColor, cancelCol: string = cancelColor
  ) {
    console.log('showSpinner');
    objeto.showSpinner();
    Swal.fire({
      title: title,
      text: 'Desea Continuar?',
      confirmButtonText: 'Si, Eliminar!',
      confirmButtonColor: confirmCol,
      cancelButtonColor: cancelCol,
      showCancelButton: true,

    }).then((result: any) => {
      if (result.isConfirmed) {
        objeto.elementService.delete(id).subscribe(
          (resp: any) => {
            console.log('resp', resp)
            objeto.onReset(); objeto.getAll(); objeto.hideSpinner();
            ToastDef.fire({ icon: "warning", title: "Almacen Eliminada" });
          },
          (error: any) => {
            console.log('error', error)
            objeto.hideSpinner()
          }
        )
      } else {
        objeto.hideSpinner();
      }
    });


  }

  public sweetConfirmCreateOrUpdate(
    objeto: any, title: string, element: any,
    confirmCol: string = confirmColor, cancelCol: string = cancelColor
  ) {
    Swal.fire({
      title: title,
      text: 'Desea Continuar?',
      confirmButtonText: 'Si, Continuar!',
      confirmButtonColor: confirmCol,
      cancelButtonColor: cancelCol,
      showCancelButton: true,

    }).then((result: any) => {
      if (result.isConfirmed) {
        objeto.elementService.createOrUpdate(element).subscribe({
          next: (resp: any) => {
            console.log('resp', resp)
            objeto.onReset();
            objeto.getAll();
            objeto.hideSpinner();
            ToastDef.fire({ icon: "success", title: "Registro Grabado" });
          },
          error: (error: any) => {
            /* TODO: manejo de errores */;
            objeto.hideSpinner();
          }
        })
      } else {
        objeto.hideSpinner();
      }
    })

  }

}

