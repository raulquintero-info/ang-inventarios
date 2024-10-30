export interface Categoria{
  idCategoria: number|null;
  nombreCategoria: string;
  parentId: number|null;
  descripcionCategoria: string;
  folder: boolean;
  subcategorias: Categoria
}
