export class CajaModel {
    cajaid      ?: string;
    tipoCaja    ?: string;
    estatus     ?: string;
    saldo       ?: string;
    efectivo    ?: string;
    cambio      ?: string;
    usuarioId   ?: string;

    constructor(args:CajaModel){
        Object.assign(this,args)
    }
}
