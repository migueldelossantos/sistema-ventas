import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Modelos
import { environment } from 'src/environments/environment';
import { CajaModel } from '../../models/cajas/cajas.model';

@Injectable({
  providedIn: 'root'
})
export class CajasService {

  private url = environment.URL;

  constructor(private http: HttpClient) { }

  createCaja( caja: CajaModel ) {
    return this.http.post(`${this.url}/cajas`, caja);
  }

  updateCaja(id: string, caja: CajaModel ) {
    return this.http.put(`${ this.url }/cajas/${id}`, caja);
  }

  deleteCaja( id: string ) {
    return this.http.delete(`${ this.url }/cajas/${ id }`);
  }

  getCaja( id: string ): Observable<any>  {
    return this.http.get(`${ this.url }/cajas/${ id }`);
  }

  getCajas(): Observable<any> {
    return this.http.get(`${ this.url }/cajas`);

  }
}
