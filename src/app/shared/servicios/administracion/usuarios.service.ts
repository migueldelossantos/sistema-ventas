import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Modelos
import { environment } from 'src/environments/environment';
import {  UsuarioModel } from '../../models/administracion/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = environment.URL;
  private token = localStorage.getItem('token');

  constructor(private http: HttpClient) { }

  createUsuario( usuario: UsuarioModel ) {
    return this.http.post(`${this.url}/usuarios`, usuario);
  }

  updateUsuario(id: string, usuario: UsuarioModel ) {
    return this.http.put(`${ this.url }/usuarios/${id}`, usuario);
  }

  deleteUsuario( id: string ) {
    return this.http.delete(`${ this.url }/usuarios/${ id }`);
  }

  getUsuario( id: string ): Observable<any>  {
    return this.http.get(`${ this.url }/usuarios/${ id }`);
  }

  getUsuarioNombre( nombre: string ): Observable<any>  {
    return this.http.get(`${ this.url }/usuarios/nombre/${ nombre }`);
  }

  getUsuarioClave( email: string ): Observable<any>{
    return this.http.get(`${ this.url }/usuarios/email/${ email }`);
  }

  getUsuarios(): Observable<any> {
    return this.http.get(`${ this.url }/usuarios/`);

  }

  //Verificar seccion de login para ver donde se guardaría el token
  login( usuario:UsuarioModel ){
    return this.http.post(`${this.url}/login/`, usuario);
  }

}
