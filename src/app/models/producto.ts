import { Categoria } from "./categoria";
import { Empresa } from "./empresa";
import { Marca } from "./marca";

export interface Producto {
    id: number;
    nombre:string;
    descripcion?: string;
    precio?: string;
    marcaId?: string;
    marca:Marca;
    categoria:Categoria;
    estado?: string;
    precio_oferta?: number;
    fechaDesdeDescuento?:string;
    fechaHastaDescuento?:string;
    empresa:Empresa;
}
