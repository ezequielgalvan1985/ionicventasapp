import { Pedido } from "./pedido";
import { Producto } from "./producto";

export interface PedidoItem {
    id:number;
    producto:Producto;
    pedido:Pedido;
    cantidad:number;
    
}
