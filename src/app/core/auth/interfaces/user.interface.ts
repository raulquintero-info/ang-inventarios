import { Rol } from "src/app/core/interfaces/rol.interface";
import { Authority } from "./authority.interface";

export interface User{
  idUsuario: number;
  email: string;
  password: string;
  username: string;
  authorities?: Authority[];
  idCliente: number;
  idEmpleado:number;
  // accountNonExpired: boolean;
  // accountNonLocked: boolean;
  // credentialsNonExpired: boolean;
  // enabled: boolean;
  // authrities: Rol[];
  role: string;
}
