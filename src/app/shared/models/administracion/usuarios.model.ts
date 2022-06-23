export class UsuarioModel {
    usuarioId   !: string;
    nombre      ?: string;
    clave       !: string;
    email       ?: string;
    contrasena  !: string;
    estatus     !: string;
    fechaAlta   !: string;
    rol         !: object;

    constructor() {
    }

}
