import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Modelos
import { CuentaModel } from '../../models/cuentas/cuentas.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  private url = environment.URL;
  private token = localStorage.getItem('token');
  headers = new HttpHeaders({
    "Authirization" : `${this.token}`
  })
  requestOptions = { headers: this.headers };

  constructor(private http: HttpClient ) { }

  createCuenta( cuenta: CuentaModel ) {
    return this.http.post(`${this.url}/cuentas`, cuenta, this.requestOptions);
  }

  updateCuenta(id: string, cuenta: CuentaModel ) {
    return this.http.put(`${ this.url }/cuentas/${id}`, cuenta, this.requestOptions);
  }

  deleteCuenta( id: string ) {
    return this.http.delete(`${ this.url }/cuentas/${ id }`, this.requestOptions);
  }

  getCuenta( id: string ): Observable<any>  {
    return this.http.get(`${ this.url }/cuentas/${ id }`, this.requestOptions);
  }

}
