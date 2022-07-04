export class DetalleVentaModel {
    ventaId ?: string;
    productoId  ?: string;
    cantidad    ?: string;
    precio  ?: string;
    descuento   ?: string;
    total   ?: string;

    constructor(args:DetalleVentaModel) {
        Object.assign(this,args)
    }
}
