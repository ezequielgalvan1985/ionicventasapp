import { Usuario } from "../models/usuario";
import { UserResponseDto } from "./response/user-response-dto";

export interface UsuarioDatosPersonalesDto {
    id:number;
    nombre:string;
    apellido:string;
    direccion:string;
    ciudad:string;
    telefono:string;
    user:UserResponseDto;
}
