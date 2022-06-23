import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Modelos
import { CuentaModel } from '../../models/cuentas/cuentas.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  private url = environment.URL;

  constructor(private http: HttpClient ) { }

  createCuenta( cuenta: CuentaModel ) {
    return this.http.post(`${this.url}/cuentas`, cuenta);
  }

  updateCuenta(id: string, cuenta: CuentaModel ) {
    return this.http.put(`${ this.url }/cuentas/${id}`, cuenta);
  }

  deleteCuenta( id: string ) {
    return this.http.delete(`${ this.url }/cuentas/${ id }`, {responseType: 'text'});
  }

  getCuenta( id: string ): Observable<any>  {
    return this.http.get(`${ this.url }/cuentas/${ id }`);
  }

}
