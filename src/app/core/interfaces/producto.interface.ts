import { Categoria } from "./categoria.interface";
import { Marca } from "./marca.interface";
import { Proveedor } from "./proveedor.interface";
import { TipoProducto } from "./tipo-producto.interface";
import { UnidadMedida } from "./unidades-medida";

export interface Producto{
  idProducto:           number;
  nombreProducto:       string;
  descripcionProducto:  string;
  sku:                  string;
  precio:               number;
	cantidad:             number;
  minimo:               number;
  maximo:               number;
  unidadMedida:         UnidadMedida;
  proveedor:            Proveedor;
  marca:                Marca;
  tipoProducto?:         TipoProducto;
  fechaCreacion:        string;
  fechaActualizacion:   string;
  categoria:            Categoria;

}
