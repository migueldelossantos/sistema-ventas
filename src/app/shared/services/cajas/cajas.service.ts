import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Modelos
import { environment } from 'src/environments/environment';
import { CajaModel } from '../../models/cajas/cajas.model';

@Injectable({
  providedIn: 'root'
})
export class CajasService {

  private url = environment.URL;
  private token = localStorage.getItem('token');
  headers = new HttpHeaders({
    "Authirization" : `${this.token}`
  })
  requestOptions = { headers: this.headers };

  constructor(private http: HttpClient) { }

  createCaja( caja: CajaModel ) {
    return this.http.post(`${this.url}/cajas`, caja, this.requestOptions);
  }

  updateCaja(id: string, caja: CajaModel ) {
    return this.http.put(`${ this.url }/cajas/${id}`, caja, this.requestOptions);
  }

  deleteCaja( id: string ) {
    return this.http.delete(`${ this.url }/cajas/${ id }`, this.requestOptions);
  }

  getCaja( id: string ): Observable<any>  {
    return this.http.get(`${ this.url }/cajas/${ id }`, this.requestOptions);
  }

  getCajas(): Observable<any> {
    return this.http.get(`${ this.url }/cajas`, this.requestOptions);

  }
}
