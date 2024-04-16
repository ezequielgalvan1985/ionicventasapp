import { Pedido } from "../models/pedido";
import { Producto } from "../models/producto";

export interface PedidoItemDto {
    id:number;
    cantidad:number;
    pedido:Pedido;
    producto:Producto;
    
}
