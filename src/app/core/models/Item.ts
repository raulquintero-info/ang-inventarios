import { TipoUnidad } from "./tipoUnidad";

export interface Item{

  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
  minimo: number;
  maximo: number;
  unidad: TipoUnidad;
  existencia: number;


}
