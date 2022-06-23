import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SubCategoriaModel } from '../../models/inventario/subcategorias.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SubcategoriasService {

  private url = environment.URL;

  constructor(private http: HttpClient) { }

  createSubCategoria( subCategoria: SubCategoriaModel ) {
    return this.http.post(`${this.url}/subCategorias`, subCategoria);
  }

  updateSubCategoria(id: string, subCategoria: SubCategoriaModel) {
    return this.http.put(`${ this.url }/subCategorias/${id}`, subCategoria);
  }

  deleteSubCategoria( id: string ) {
    return this.http.delete(`${ this.url }/subCategorias/${ id }`);
  }

  getSubCategoria( id: string ): Observable<any>  {
    return this.http.get(`${ this.url }/subCategorias/${ id }`);
  }

  getSubCategorias(): Observable<any> {
    return this.http.get(`${ this.url }/subCategorias`);
  }

}
