import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Modelos
import { environment } from 'src/environments/environment';
import { RolModel } from '../../models/administracion/roles.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private url = environment.URL;

  constructor(private http: HttpClient) { }

  createRol( rol: RolModel ) {
    return this.http.post(`${this.url}/roles`, rol);
  }

  updateRol(id: string, rol: RolModel ) {
    return this.http.put(`${ this.url }/roles/${id}`, rol);
  }

  deleteRol( id: string ) {
    return this.http.delete(`${ this.url }/roles/${ id }`);
  }

  getRol( id: string ): Observable<any>  {
    return this.http.get(`${ this.url }/roles/${ id }`);
  }

  getRolNombre( nombre: string ): Observable<any>  {
    return this.http.get(`${ this.url }/roles/nombre/${ nombre }`);
  }

  getRoles(): Observable<any> {
    return this.http.get(`${ this.url }/roles`);
  }
  
}
