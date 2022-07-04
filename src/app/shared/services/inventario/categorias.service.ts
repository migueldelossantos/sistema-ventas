import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CategoriaModel } from '../../models/inventario/categorias.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private url = environment.URL;
  private token = localStorage.getItem('token');
  headers = new HttpHeaders({
    "Authirization" : `${this.token}`
  })
  requestOptions = { headers: this.headers };

  constructor(private http: HttpClient) { }

  createCategoria( categoria: CategoriaModel ) {
    return this.http.post(`${this.url}/categorias`, categoria, this.requestOptions);
  }

  updateCategoria(id: string, categoria: CategoriaModel) {
    return this.http.put(`${ this.url }/categorias/${id}`, categoria, this.requestOptions);
  }

  deleteCategoria( id: string ) {
    return this.http.delete(`${ this.url }/categorias/${ id }`, this.requestOptions);
  }

  getCategoria( id: string ): Observable<any>  {
    return this.http.get(`${ this.url }/categorias/${ id }`, this.requestOptions);
  }

  /*getCategoriaNombre( nombre: string ): Observable<any>  {
    return this.http.get(`${ this.url }/categorias/nombre/${ nombre }`);
  }*/

  getCategorias(): Observable<any> {
    return this.http.get(`${ this.url }/categorias`, this.requestOptions);
  }
}
