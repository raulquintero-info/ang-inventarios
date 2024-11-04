import { Categoria } from "./categoria.interface";
import { Marca } from "./marca.interface";
import { Proveedor } from "./proveedor.interface";
import { UnidadMedida } from "./unidades-medida";

export interface Producto{
  idProducto: number;
  nombreProducto: string;
  descripcionProducto: string;
  sku: string;
  precio: number,
	cantidad: number,
  fechaCreacion: string,
  fechaActualizacion: string,
  minimo: number,
  maximo: number,
  unidadMedida: UnidadMedida,
  proveedor: Proveedor
  marca: Marca,
  categoria: Categoria,
}
