export class DetalleCompraModel {
    compraId    ?: string;
    productoId  ?: string;
    cantidad    ?: string;
    precio  ?: string;
    descuento   ?: string;
    total   ?: string;

    constructor(args:DetalleCompraModel) {
        Object.assign(this,args)
    }
}