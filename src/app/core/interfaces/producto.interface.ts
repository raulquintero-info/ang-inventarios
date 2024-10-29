export interface Producto{
  sku: string;
  nombreProducto: string;
  descripcionProducto: string;
  precio: number,
	cantidad: number,
  fecha_creacion: string,
  fecha_actualizacion: string,
  minimo: number,
  maximo: number,
  // unidadMedida: UnidadMedida,
  // marca: Marca,
  // categoria: Categria,
  // proveedor: Proveedor
}
