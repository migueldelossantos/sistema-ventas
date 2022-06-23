import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// Modelos
import { DetalleVentaModel } from '../../models/ventas/detallesventa.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetallesventaService {

  private url = environment.URL;

  constructor(private http: HttpClient) { }

  createDetalleVenta( detalleVenta: DetalleVentaModel ) {
    return this.http.post(`${this.url}/detVentas`, detalleVenta);
  }

  updateDetalleVenta(ventaID: string, detalleVentaID: string, detalleVenta: DetalleVentaModel ) {
    return this.http.put(`${ this.url }/detVentas/${ventaID}/${detalleVentaID}`, detalleVenta);
  }

  deleteDetallesVenta( ventaID: string ) {
    return this.http.delete(`${ this.url }/detVentas/${ ventaID }`);
  }

  deleteDetalleVenta( ventaID: string, detalleVentaID: string, ) {
    return this.http.delete(`${ this.url }/detVentas/${ ventaID }/${ detalleVentaID }`);
  }

  getDetalleVenta( ventaID: string, detalleVentaID: string  ): Observable<any>  {
    return this.http.get(`${ this.url }/detVentas/${ ventaID }/${ detalleVentaID }`);
  }

  getDetallesVenta( ventaID: string ): Observable<any>  {
    return this.http.get(`${ this.url }/detVentas/${ ventaID }`);
  }
}
