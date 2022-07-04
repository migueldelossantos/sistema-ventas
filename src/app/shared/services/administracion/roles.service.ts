import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Modelos
import { environment } from 'src/environments/environment';
import { RolModel } from '../../models/administracion/roles.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private url = environment.URL;
  private token = localStorage.getItem('token');
  headers = new HttpHeaders({
    "Authirization" : `${this.token}`
  })
  requestOptions = { headers: this.headers };

  constructor(private http: HttpClient) { }

  createRol( rol: RolModel ) {
    return this.http.post(`${this.url}/roles`, rol);
  }

  updateRol(id: string, rol: RolModel ) {
    return this.http.put(`${ this.url }/roles/${id}`, rol, this.requestOptions);
  }

  deleteRol( id: string ) {
    return this.http.delete(`${ this.url }/roles/${ id }`, this.requestOptions);
  }

  getRol( id: string ): Observable<any>  {
    return this.http.get(`${ this.url }/roles/${ id }`, this.requestOptions);
  }

  getRolNombre( nombre: string ): Observable<any>  {
    return this.http.get(`${ this.url }/roles/nombre/${ nombre }`, this.requestOptions);
  }

  getRoles(): Observable<any> {
    return this.http.get(`${ this.url }/roles`);
  }
  
}
