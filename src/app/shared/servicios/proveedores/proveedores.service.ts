import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Modelos
import { ProveedorModel } from '../../models/proveedores/proveedores.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  private url = environment.URL;

  constructor( private http: HttpClient ) { }

  createProveedor( proveedor: ProveedorModel ) {
    return this.http.post(`${this.url}/proveedores`, proveedor);
  }

  updateProveedor(id: string, proveedor: ProveedorModel ) {
    return this.http.put(`${ this.url }/proveedores/${id}`, proveedor);
  }

  deleteProveedor( id: string ) {
    return this.http.delete(`${ this.url }/proveedores/${ id }`);
  }

  getProveedor( id: string ): Observable<any>  {
    return this.http.get(`${ this.url }/proveedores/${ id }`);
  }

  getProveedorNombre( nombre: string ): Observable<any>  {
    return this.http.get(`${ this.url }/proveedores/nombre/${ nombre }`);
  }

  getProveedores(): Observable<any> {
    return this.http.get(`${ this.url }/proveedores/`);
  }
}
