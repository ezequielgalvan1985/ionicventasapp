import { Empresa } from "./empresa";
import { PedidoItem } from "./pedido-item";
import { Usuario } from "./usuario";

export interface Pedido {
    id:number;
    usuario:Usuario;
    fecha:Date;
    items:PedidoItem[];
    estado:string;
    importeenvio:number;
    empresa:Empresa;
    direccion:string;
    importe:number;
    descuento:number;
}
