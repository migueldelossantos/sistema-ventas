import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Modelos
import { environment } from 'src/environments/environment';
import { ClienteModel } from '../../models/clientes/clientes.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
   private url = environment.URL;

  constructor(private http: HttpClient) { }

  createCliente( cliente: ClienteModel ) {
    return this.http.post(`${this.url}/clientes`, cliente);
  }

  updateCliente(id: string, cliente: ClienteModel ) {
    return this.http.put(`${ this.url }/clientes/${id}`, cliente);
  }

  deleteCliente( id: string ) {
    return this.http.delete(`${ this.url }/clientes/${ id }`, {responseType: 'text'});
  }

  getCliente( id: string ): Observable<any>  {
    return this.http.get(`${ this.url }/clientes/${ id }`);
  }

  getClienteNombre( nombre: string ): Observable<any>  {
    return this.http.get(`${ this.url }/clientes/nombre/${ nombre }`);
  }
}
