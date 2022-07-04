export class UsuarioModel {
    usuarioId   ?: string;
    nombre      ?: string;
    clave       ?: string;
    email       ?: string;
    password    ?: string;
    estatus     ?: string;
    fechaAlta   ?: string;
    rol         ?: object;
    jwtoken     ?: string;

    constructor() {
    }
}
