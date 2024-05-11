import { Empresa } from "../models/empresa";
import { PedidoItem } from "../models/pedido-item";
import { Usuario } from "../models/usuario";
import { EmpresaDto } from "./empresa-dto";
import { PedidoItemSmallDto } from "./pedido-item-small-dto";

export interface PedidoSmallDto {
    id:number;
    fecha:Date;
    estado:string;
    items:PedidoItemSmallDto[];
    importeenvio:number;
    direccion:string;
    empresa:EmpresaDto;
    usuario:Usuario;
}
