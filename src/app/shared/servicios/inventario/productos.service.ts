import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProductoModel } from '../../models/inventario/productos.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  private url = environment.URL;

  constructor(private http: HttpClient) { }

  createProducto( producto: ProductoModel ) {
    return this.http.post(`${this.url}/productos`, producto);
  }

  updateProducto(id: string, producto: ProductoModel) {
    return this.http.put(`${ this.url }/productos/${id}`, producto);
  }

  deleteProducto( id: string ) {
    return this.http.delete(`${ this.url }/productos/${ id }`);
  }

  getProducto( id: string ): Observable<any>  {
    return this.http.get(`${ this.url }/productos/${ id }`);
  }

  getProductoCodigo( codigo: string ): Observable<any>  {
    return this.http.get(`${ this.url }/productos/codigoBarras/${ codigo }`);
  }

  getProductoNombre( nombre: string ): Observable<any>  {
    return this.http.get(`${ this.url }/productos/nombre/${ nombre }`);
  }
}
