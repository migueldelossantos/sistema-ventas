import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Modelos
import { ProveedorModel } from '../../models/proveedores/proveedores.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  private url = environment.URL;
  private token = localStorage.getItem('token');
  headers = new HttpHeaders({
    "Authirization" : `${this.token}`
  })
  requestOptions = { headers: this.headers };

  constructor( private http: HttpClient ) { }

  createProveedor( proveedor: ProveedorModel ) {
    return this.http.post(`${this.url}/proveedores`, proveedor, this.requestOptions);
  }

  updateProveedor(id: string, proveedor: ProveedorModel ) {
    return this.http.put(`${ this.url }/proveedores/${id}`, proveedor, this.requestOptions);
  }

  deleteProveedor( id: string ) {
    return this.http.delete(`${ this.url }/proveedores/${ id }`, this.requestOptions);
  }

  getProveedor( id: string ): Observable<any>  {
    return this.http.get(`${ this.url }/proveedores/${ id }`, this.requestOptions);
  }

  getProveedorNombre( nombre: string ): Observable<any>  {
    return this.http.get(`${ this.url }/proveedores/nombre/${ nombre }`, this.requestOptions);
  }

  getProveedores(): Observable<any> {
    return this.http.get(`${ this.url }/proveedores/`, this.requestOptions);
  }
}
