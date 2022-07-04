import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  headers = new HttpHeaders({
    "Authirization" : `${this.token}`,
    "Content-Type"  : 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin' : '*'
  })
  requestOptions = { headers: this.headers };

  constructor(private http: HttpClient) { }

  createUsuario( usuario: UsuarioModel ) {
    return this.http.post(`${this.url}/usuarios`, usuario);
  }

  updateUsuario(id: string, usuario: UsuarioModel ) {
    return this.http.put(`${ this.url }/usuarios/${id}`, usuario, this.requestOptions);
  }

  deleteUsuario( id: string ) {
    return this.http.delete(`${ this.url }/usuarios/${id}`, this.requestOptions);
  }

  getUsuario( id: string ): Observable<any>  {
    return this.http.get(`${ this.url }/usuarios/${ id }`, this.requestOptions);
  }

  getUsuarioNombre( nombre: string ): Observable<any>  {
    return this.http.get(`${ this.url }/usuarios/nombre/${ nombre }`, this.requestOptions);
  }

  getUsuarioClave( email: string ): Observable<any>{
    return this.http.get(`${ this.url }/usuarios/email/${ email }`, this.requestOptions);
  }

  getUsuarios(): Observable<any> {
    return this.http.get(`${ this.url }/usuarios/`);
  }

  //Verificar seccion de login para ver donde se guardaría el token
  login( usuario:UsuarioModel ){
    return this.http.post<UsuarioModel>(`${this.url}/login/`, usuario);
  }

}
