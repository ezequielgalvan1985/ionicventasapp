import { Usuario } from "../models/usuario";

export interface UsuarioDatosPersonalesDto {
    id:number;
    nombre:string;
    apellido:string;
    direccion:string;
    ciudad:string;
    telefono:string;
    usuario:Usuario;
}
