export interface iBaseComponente{

  /**
   * @ngdoc method
   * @name minimize
   * @description Metodo Generico para deslizar hacia arriba componente en barra inferior
   */
  minimize(): void;

  /**
   * @ngdoc method
   * @name maximize
   * @description Metodo Generico para ocultar hacia arriba componente en barra inferior
   */maximize(): void;

/**
   * @ngdoc method
   * @name sweetConfirmDelete
   * @description Metodo Generico para eliminar un elemento de un catalogo
   * @param {any=} objeto (this) Objeto desde donde es llamado
   * @param {string=} titleDialog Titulo de la ventana sweetalert
   * @param {number=} id id del elemento a eliminar
   * @param {string=} confirmCol Color del Boton de Confirmacion [opcional]
   * @param {string=} cancelColColor del Boton de Cancelacion [opcional]
   * @returns {void} void
   */
  sweetConfirmDelete( objeto: any, titleDialog: string, id: number, confirmCol: string, cancelCol: string ): void;

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
  sweetConfirmCreateOrUpdate( objeto: any, titleDialog: string,confirmCol: string, cancelCol: string ): void;

  handleError(error: any): void;

}
