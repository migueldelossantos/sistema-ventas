import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { DireccionClienteModel} from '../../models/clientes/direcciones.model';


@Injectable({
  providedIn: 'root'
})
export class DireccionesService {
  private url = environment.URL;

  constructor(private http: HttpClient) { }

  createDireccionCliente( direccionCliente: DireccionClienteModel ) {
    return this.http.post(`${this.url}/dirClientes/`, direccionCliente);
  }

  updateDireccionCliente(clienteID: string, direcClienteID: string, direccionCliente: DireccionClienteModel ) {
    return this.http.put(`${ this.url }/dirClientes/${clienteID}/${direcClienteID}`, direccionCliente);
  }

  deleteDireccionCliente( clienteID: string, direcClienteID: string ) {
    return this.http.delete(`${ this.url }/dirClientes/${ clienteID }/${ direcClienteID }`);
  }

  /*deleteDireccionesCliente( clienteID: string ) {
    return this.http.delete(`${ this.url }/dirClientes/delete/${ clienteID }`);
  }*/

  getDireccionCliente( clienteID: string, direcClienteID: string  ): Observable<any>  {
    return this.http.get(`${ this.url }/dirClientes/${ clienteID }/${ direcClienteID }`);
  }

  getDireccionesCliente( clienteID: string ): Observable<any>  {
    return this.http.get(`${ this.url }/dirClientes/${ clienteID }`);
  }
}
