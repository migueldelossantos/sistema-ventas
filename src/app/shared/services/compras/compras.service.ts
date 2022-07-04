import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Modelos
import { environment } from 'src/environments/environment';
import { CompraModel } from '../../models/compras/compras.model';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  private url = environment.URL;
  private token = localStorage.getItem('token');
  headers = new HttpHeaders({
    "Authirization" : `${this.token}`
  })
  requestOptions = { headers: this.headers };

  constructor(private http: HttpClient) { }

  createCompra( compra: CompraModel ) {
    return this.http.post(`${this.url}/compras`, compra, this.requestOptions);
  }

  updateCompra(id: string, compra: CompraModel ) {
    return this.http.put(`${ this.url }/compras/${id}`, compra, this.requestOptions);
  }

  deleteCompra( id: string ) {
    return this.http.delete(`${ this.url }/compras/${ id }`, this.requestOptions);
  }

  getCompra( id: string ): Observable<any>  {
    return this.http.get(`${ this.url }/compras/${ id }`, this.requestOptions);
  }

}
