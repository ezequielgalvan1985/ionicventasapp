import { Pedido } from "../models/pedido";
import { Producto } from "../models/producto";

export interface PedidoItemSmallDto {
    id:number;
    producto_id:number;
    pedido_id:number;
    cantidad:number;
}
