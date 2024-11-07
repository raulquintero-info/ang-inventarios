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

  maximize() { this.bottomBarSize = this.sizeMaximized; this.isMaximized = true; }
  minimize() { this.bottomBarSize = this.sizeMinimized; this.isMaximized = false; }

/**
   * @ngdoc method
   * @name sweetConfirmCreateOrUpdate
   * @description Metodo Generico para eliminar un elemento de un catalogo
   * @param {any=} objeto (this) Objeto desde donde es llamado
   * @param {string=} titleDialog Titulo de la ventana sweetalert
   * @param {number=} id id del elemento a eliminar
   * @param {string=} confirmCol Color del Boton de Confirmacion [opcional]
   * @param {string=} cancelColColor del Boton de Cancelacion [opcional]
   * @returns {void} void
   */
  public sweetConfirmDelete( objeto: any, titleDialog: string, id: number, confirmCol: string = confirmColor, cancelCol: string = cancelColor ) {

    console.log('showSpinner');
    objeto.showSpinner();
    Swal.fire({
      title: titleDialog,
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
            objeto.getAll(); objeto.hideSpinner();
            ToastDef.fire({ icon: "success", title: resp.mensaje });
          },
          (error: any) => {
            console.log('error');
            objeto.hideSpinner()
            this.handleError(error);
          }
        )
      } else { objeto.hideSpinner(); }
    });

  }

  /**
   * @ngdoc method
   * @name sweetConfirmCreateOrUpdate
   * @description Metodo Generico para eliminar un elemento de un catalogo
   * @param {any=} objeto (this) Objeto desde donde es llamado
   * @param {string=} titleDialog Titulo de la ventana sweetalert
   * @param {string=} confirmCol Color del Boton de Confirmacion [opcional]
   * @param {string=} cancelCol Color del Boton de Cancelacion [opcional]
   * @returns {void} void
   */
  public sweetConfirmCreateOrUpdate( objeto: any, titleDialog: string = 'Crear o Editar Campo',confirmCol: string = confirmColor, cancelCol: string = cancelColor ) {
    objeto.showSpinner();
    Swal.fire({
      title: titleDialog,
      text: 'Desea Continuar?',
      confirmButtonText: 'Si, Continuar!',
      confirmButtonColor: confirmCol,
      cancelButtonColor: cancelCol,
      showCancelButton: true,

    }).then((result: any) => {
      if (result.isConfirmed) {
        console.log('data to save', objeto.elementForm.value);
        objeto.elementService.createOrUpdate(objeto.elementForm.value).subscribe({
          next: (resp: any) => {
            console.log('resp', resp)
            objeto.onReset();
            objeto.getAll();
            objeto.hideSpinner();
            ToastDef.fire({ icon: "success", title: resp.mensaje });
          },
          error: (error: any) => {
            objeto.hideSpinner();
            this.handleError(error);
          }
        })
      } else { objeto.hideSpinner(); }
    })

  }

  handleError(error: any){
    switch(error.status){
      case 401: ToastDef.fire({ icon: "error", title: error.status + ". Notienes autorizacion para ver este contenido" });break;
      case 405: ToastDef.fire({ icon: "error", title: error.status + ". Metodo No permitido" }); console.log('>>handle>>',error);break;
      default: ToastDef.fire({ icon: "error", title: error.status + ". Ha ocurrido un problema" }); break;
    }
  }


}

