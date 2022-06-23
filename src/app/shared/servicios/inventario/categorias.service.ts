import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CategoriaModel } from '../../models/inventario/categorias.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private url = environment.URL;

  constructor(private http: HttpClient) { }

  createCategoria( categoria: CategoriaModel ) {
    return this.http.post(`${this.url}/categorias`, categoria);
  }

  updateCategoria(id: string, categoria: CategoriaModel) {
    return this.http.put(`${ this.url }/categorias/${id}`, categoria);
  }

  deleteCategoria( id: string ) {
    return this.http.delete(`${ this.url }/categorias/${ id }`);
  }

  getCategoria( id: string ): Observable<any>  {
    return this.http.get(`${ this.url }/categorias/${ id }`);
  }

  getCategoriaNombre( nombre: string ): Observable<any>  {
    return this.http.get(`${ this.url }/categorias/nombre/${ nombre }`);
  }

  getCategorias(): Observable<any> {
    return this.http.get(`${ this.url }/categorias`);
  }
}
