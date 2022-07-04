import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Modelos
import { DetalleCompraModel } from '../../models/compras/detallescompra.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetallescompraService {

  private url = environment.URL;
  private token = localStorage.getItem('token');
  headers = new HttpHeaders({
    "Authirization" : `${this.token}`
  })
  requestOptions = { headers: this.headers };

  constructor(private http: HttpClient) { }

  createDetalleCompra( detalleCompra: DetalleCompraModel ) {
    return this.http.post(`${this.url}/detCompras`, detalleCompra, this.requestOptions);
  }

  updateDetalleCompra(detalleCompraID: string, detalleCompra: DetalleCompraModel ) {
    return this.http.put(`${ this.url }/detCompras/${detalleCompraID}`, detalleCompra, this.requestOptions);
  }

  deleteDetallesCompra( compraID: string ) {
    return this.http.delete(`${ this.url }/detCompras/${ compraID }`, this.requestOptions);
  }

  /*deleteDetalleCompra( compraID: string, detalleCompraID: string, ) {
    return this.http.delete(`${ this.url }/detCompras/${ compraID }/${ detalleCompraID }`);
  }*/

  /*getDetallesCompra( id: string ): Observable<any>  {
    return this.http.get(`${ this.url }/detCompras/${ id }`);
  }*/

  getDetalleCompra(compraID: string ): Observable<any> {
    return this.http.get(`${ this.url }/detCompras/${ compraID }`, this.requestOptions);

  }
}
