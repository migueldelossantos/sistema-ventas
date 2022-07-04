import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { DireccionClienteModel} from '../../models/clientes/direcciones.model';


@Injectable({
  providedIn: 'root'
})
export class DireccionesService {

  private url = environment.URL;
  private token = localStorage.getItem('token');
  headers = new HttpHeaders({
    "Authirization" : `${this.token}`
  })
  requestOptions = { headers: this.headers };

  constructor(private http: HttpClient) { }

  createDireccionCliente( direccionCliente: DireccionClienteModel ) {
    return this.http.post(`${this.url}/dirClientes/`, direccionCliente, this.requestOptions);
  }

  updateDireccionCliente( direcClienteID: string, direccionCliente: DireccionClienteModel ) {
    return this.http.put(`${ this.url }/dirClientes/${direcClienteID}`, direccionCliente, this.requestOptions);
  }

  deleteDireccionCliente( clienteID: string, direcClienteID: string ) {
    return this.http.delete(`${ this.url }/dirClientes/${ direcClienteID }`, this.requestOptions);
  }

  /*deleteDireccionesCliente( clienteID: string ) {
    return this.http.delete(`${ this.url }/dirClientes/delete/${ clienteID }`);
  }*/

  /*getDireccionCliente( clienteID: string ): Observable<any>  {
    return this.http.get(`${ this.url }/dirClientes/${ clienteID }`, this.requestOptions);
  }*/

  getDireccionesCliente( clienteID: string ): Observable<any>  {
    return this.http.get(`${ this.url }/dirClientes/${ clienteID }`, this.requestOptions);
  }
}
