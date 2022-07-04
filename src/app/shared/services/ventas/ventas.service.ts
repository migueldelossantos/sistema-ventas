import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Modelos
import { VentaModel, } from '../../models/ventas/ventas.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private url = environment.URL;
  private token = localStorage.getItem('token');
  headers = new HttpHeaders({
    "Authirization" : `${this.token}`
  })
  requestOptions = { headers: this.headers };

  constructor(private http: HttpClient ) { }

  createVenta( venta: VentaModel ) {
    return this.http.post(`${this.url}/ventas`, venta, this.requestOptions);
  }

  updateVenta(id: string, venta: VentaModel ) {
    return this.http.put(`${ this.url }/ventas/${id}`, venta, this.requestOptions);
  }

  deleteVenta( id: string ) {
    return this.http.delete(`${ this.url }/ventas/${ id }`, this.requestOptions);
  }

  getVenta( id: string ): Observable<any>  {
    return this.http.get(`${ this.url }/ventas/${ id }`, this.requestOptions);
  }


}
