import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Modelos
import { environment } from 'src/environments/environment';
import { CompraModel } from '../../models/compras/compras.model';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  private url = environment.URL;

  constructor(private http: HttpClient) { }

  createCompra( compra: CompraModel ) {
    return this.http.post(`${this.url}/compras`, compra);
  }

  updateCompra(id: string, compra: CompraModel ) {
    return this.http.put(`${ this.url }/compras/${id}`, compra);
  }

  deleteCompra( id: string ) {
    return this.http.delete(`${ this.url }/compras/${ id }`);
  }

  getCompra( id: string ): Observable<any>  {
    return this.http.get(`${ this.url }/compras/${ id }`);
  }

}
