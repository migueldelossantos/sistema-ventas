export class VentaModel {
    ventaid ?: string;
    fecha   ?: string;
    fechaPago   ?: string;
    transaccion ?: string;
    subTotal    ?: string;
    descuento   ?: string;
    iva ?: string;
    total   ?: string;
    flete   ?: string;
    estatus ?: string;
    usuarioId   ?: string;
    clienteId   ?: string;

    constructor(args:VentaModel) {
        Object.assign(this,args)
    }
}
