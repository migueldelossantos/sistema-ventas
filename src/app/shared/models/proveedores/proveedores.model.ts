export class ProveedorModel {
    proveedorid ?: string;
    nombre  ?: string;
    direccion   ?: string;
    telFijo ?: string;
    celular ?: string;
    email   ?: string;
    diaVisita   ?: string;

    constructor(args:ProveedorModel) {
        Object.assign(this,args)
    }
}
