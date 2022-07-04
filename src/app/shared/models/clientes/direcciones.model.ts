export class DireccionClienteModel {
    direccionId ?: string;
    clienteId   ?: string;
    estadoId    ?: string;
    municipioId ?: string;
    localidadId ?: string;
    coloniaId   ?: string;
    codigoPostal    ?: string;
    numeroExterior  ?: string;
    numeroInterior  ?: string;
    lote    ?: string;
    manzana ?: string;
    latitud ?: string;
    longitud    ?: string;

    constructor(args:DireccionClienteModel) {
        Object.assign(this,args);
    }

}
