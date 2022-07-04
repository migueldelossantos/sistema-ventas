import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SubCategoriaModel } from '../../models/inventario/subcategorias.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SubcategoriasService {

  private url = environment.URL;
  private token = localStorage.getItem('token');
  headers = new HttpHeaders({
    "Authirization" : `${this.token}`
  })
  requestOptions = { headers: this.headers };

  constructor(private http: HttpClient) { }

  createSubCategoria( subCategoria: SubCategoriaModel ) {
    return this.http.post(`${this.url}/subCategorias`, subCategoria, this.requestOptions);
  }

  updateSubCategoria(id: string, subCategoria: SubCategoriaModel) {
    return this.http.put(`${ this.url }/subCategorias/${id}`, subCategoria, this.requestOptions);
  }

  deleteSubCategoria( id: string ) {
    return this.http.delete(`${ this.url }/subCategorias/${ id }`, this.requestOptions);
  }

  getSubCategoria( id: string ): Observable<any>  {
    return this.http.get(`${ this.url }/subCategorias/${ id }`, this.requestOptions);
  }

  getSubCategorias(): Observable<any> {
    return this.http.get(`${ this.url }/subCategorias`, this.requestOptions);
  }

}
