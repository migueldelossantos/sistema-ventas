import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// Modelos
import { DetalleVentaModel } from '../../models/ventas/detallesventa.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetallesventaService {

  private url = environment.URL;
  private token = localStorage.getItem('token');
  headers = new HttpHeaders({
    "Authirization" : `${this.token}`
  })
  requestOptions = { headers: this.headers };

  constructor(private http: HttpClient) { }

  createDetalleVenta( detalleVenta: DetalleVentaModel ) {
    return this.http.post(`${this.url}/detVentas`, detalleVenta, this.requestOptions);
  }

  updateDetalleVenta(detalleVentaID: string, detalleVenta: DetalleVentaModel ) {
    return this.http.put(`${ this.url }/detVentas/${detalleVentaID}`, detalleVenta, this.requestOptions);
  }

  deleteDetallesVenta( ventaID: string ) {
    return this.http.delete(`${ this.url }/detVentas/${ ventaID }`, this.requestOptions);
  }

  deleteDetalleVenta( detalleVentaID: string, ) {
    return this.http.delete(`${ this.url }/detVentas/${ detalleVentaID }`, this.requestOptions);
  }

  getDetalleVenta( detalleVentaID: string  ): Observable<any>  {
    return this.http.get(`${ this.url }/detVentas/${ detalleVentaID }`, this.requestOptions);
  }

  getDetallesVenta( ventaID: string ): Observable<any>  {
    return this.http.get(`${ this.url }/detVentas/${ ventaID }`, this.requestOptions);
  }
}
