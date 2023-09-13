import { Empresa } from "./empresa";
import { Producto } from "./producto";

export interface Publicidad {
    id:number;
    titulo:string;
    descripcion:string;
    empresa:Empresa;
    producto:Producto;
    cantidad:number;
    precio:number;
    porcentaje:number;
    
}
