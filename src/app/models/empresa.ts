import { Usuario } from "./usuario";

export interface Empresa {
    id:number;
    nombre:string;
    rubro:string;
    frase:string;
    descripcion:string;
    direccion:string;
    ciudad:string;
    telefono:string;
    usuario:Usuario;
}
