export class CuentaModel {
    cuentaid    ?: string;
    fechaApertura   ?: string;
    etiqueta    ?: string;
    saldo   ?: string;
    saldoCredito    ?: string;
    saldoBloq   ?: string;
    saldoInimes ?: string;
    saldoElectronico    ?: string;
    abonosMes   ?: string;
    cargosMes   ?: string;
    sucursal    ?: string;
    clienteId   ?: string;

    constructor(args:CuentaModel) {
        Object.assign(this,args);
    }

}
