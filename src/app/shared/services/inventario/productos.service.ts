import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProductoModel } from '../../models/inventario/productos.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  private url = environment.URL;
  private token = localStorage.getItem('token');
  headers = new HttpHeaders({
    "Authirization" : `${this.token}`
  })
  requestOptions = { headers: this.headers };

  constructor(private http: HttpClient) { }

  createProducto( producto: ProductoModel ) {
    return this.http.post(`${this.url}/productos`, producto, this.requestOptions);
  }

  updateProducto(id: string, producto: ProductoModel) {
    return this.http.put(`${ this.url }/productos/${id}`, producto, this.requestOptions);
  }

  deleteProducto( id: string ) {
    return this.http.delete(`${ this.url }/productos/${ id }`, this.requestOptions);
  }

  getProducto( id: string ): Observable<any>  {
    return this.http.get(`${ this.url }/productos/${ id }`, this.requestOptions);
  }

  getProductoCodigo( codigo: string ): Observable<any>  {
    return this.http.get(`${ this.url }/productos/codigoBarras/${ codigo }`, this.requestOptions);
  }

  getProductoNombre( nombre: string ): Observable<any>  {
    return this.http.get(`${ this.url }/productos/nombre/${ nombre }`, this.requestOptions);
  }
}
