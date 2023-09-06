import { Marca } from "./marca";

export interface Producto {
    id: number;
    nombre:string;
    descripcion?: string;
    precio?: string;
    marcaId?: string;
    marca?: Marca;
    estado?: string;
    precioOferta?: number;
    fechaDesdeDescuento?:string;
    fechaHastaDescuento?:string;
}
