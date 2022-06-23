import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Modelos
import { DetalleCompraModel } from '../../models/compras/detallescompra.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetallescompraService {

  private url = environment.URL;

  constructor(private http: HttpClient) { }

  createDetalleCompra( detalleCompra: DetalleCompraModel ) {
    return this.http.post(`${this.url}/detCompras`, detalleCompra);
  }

  updateDetalleCompra(compraID: string, detalleCompraID: string, detalleCompra: DetalleCompraModel ) {
    return this.http.put(`${ this.url }/detCompras/${compraID}/${detalleCompraID}`, detalleCompra);
  }

  deleteDetallesCompra( compraID: string ) {
    return this.http.delete(`${ this.url }/detCompras/${ compraID }`);
  }

  deleteDetalleCompra( compraID: string, detalleCompraID: string, ) {
    return this.http.delete(`${ this.url }/detCompras/${ compraID }/${ detalleCompraID }`);
  }

  getDetallesCompra( id: string ): Observable<any>  {
    return this.http.get(`${ this.url }/detCompras/${ id }`);
  }

  getDetalleCompra(compraID: string, detalleCompraID: string): Observable<any> {
    return this.http.get(`${ this.url }/detCompras/${ compraID }/${ detalleCompraID }`);

  }
}
