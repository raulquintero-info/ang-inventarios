export const confirmColor = '#641330';
export const cancelColor = '#949597';

export class BaseComponent {
  public titleForm: string      = 'Agregar';
  public buttonForm: string     ='Grabar';
  public isMaximized: boolean   = false;
  public sizeMinimized: string  = '48px';
  // si quiere cambiar el tamaño de la ventana,sobreescriba este atributo
  // con el nuevo tamaño
  public sizeMaximized: string  = "200px"
  public bottomBarSize: string  = this.sizeMinimized;

  maximize(){
    this.bottomBarSize = this.sizeMaximized;
    this.isMaximized = true;

  }
  minimize(){
    this.bottomBarSize = this.sizeMinimized;
    this.isMaximized = false;

  }
}
