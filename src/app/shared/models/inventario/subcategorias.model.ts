export class SubCategoriaModel {
    subcategoriaid  ?: string;
    nombre  ?: string;
    descripcion ?: string;
    clave   ?: string;
    categoriaId ?: string;

    constructor(args:SubCategoriaModel) {
        Object.assign(this,args)
    }

}
