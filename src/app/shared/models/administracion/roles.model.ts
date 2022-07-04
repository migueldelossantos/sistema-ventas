export class RolModel {
    rolId       ?: string;
    nombre      ?: string;
    descripcion ?: string;
    clave       ?: string;

    constructor(args:RolModel){
        Object.assign(this,args)
    }
}
