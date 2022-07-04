import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Modelos
import { environment } from 'src/environments/environment';
import { ClienteModel } from '../../models/clientes/clientes.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private url = environment.URL;
  private token = localStorage.getItem('token');
  headers = new HttpHeaders({
    "Authirization" : `${this.token}`
  })
  requestOptions = { headers: this.headers };

  constructor(private http: HttpClient) { }

  createCliente( cliente: ClienteModel ) {
    return this.http.post(`${this.url}/clientes`, cliente, this.requestOptions);
  }

  updateCliente(id: string, cliente: ClienteModel ) {
    return this.http.put(`${ this.url }/clientes/${id}`, cliente, this.requestOptions);
  }

  deleteCliente( id: string ) {
    return this.http.delete(`${ this.url }/clientes/${ id }`, this.requestOptions);
  }

  getCliente( id: string ): Observable<any>  {
    return this.http.get(`${ this.url }/clientes/${ id }`, this.requestOptions);
  }

  getClienteNombre( nombre: string ): Observable<any>  {
    return this.http.get(`${ this.url }/clientes/nombre/${ nombre }`, this.requestOptions);
  }
}
