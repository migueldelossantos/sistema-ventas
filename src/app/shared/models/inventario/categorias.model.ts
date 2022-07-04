export class CategoriaModel {
    categoriaid ?: string;
    nombre  ?: string;
    descripcion ?: string;
    clave   ?: string;

    constructor(args:CategoriaModel) {
        Object.assign(this,args);
    }

}
