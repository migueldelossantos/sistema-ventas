import { OpcionMenuModel } from "./opcionesMenu";

export class MenuModel {
    menuId      ?: string;
    descripcion ?: string;
    desplegado  ?: string;
    orden       ?: number;
    opciones    ?: OpcionMenuModel[]

    constructor(args:MenuModel){
    }
}
