import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Modelos
import { VentaModel, } from '../../models/ventas/ventas.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private url = environment.URL;

  constructor(private http: HttpClient ) { }

  createVenta( venta: VentaModel ) {
    return this.http.post(`${this.url}/ventas`, venta);
  }

  updateVenta(id: string, venta: VentaModel ) {
    return this.http.put(`${ this.url }/ventas/${id}`, venta);
  }

  deleteVenta( id: string ) {
    return this.http.delete(`${ this.url }/ventas/${ id }`);
  }

  getVenta( id: string ): Observable<any>  {
    return this.http.get(`${ this.url }/ventas/${ id }`);
  }


}
