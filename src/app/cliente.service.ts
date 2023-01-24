import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = 'http://localhost:3000/clientes/';

  constructor(private http: HttpClient) {}

  obtenerTodos(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }
  obtenerPorId(id: number): Observable<Cliente | undefined> {
    return this.http.get<Cliente>(this.url + id);
  }
  insertar(cliente: Cliente): Observable<Cliente>  {
    return this.http.post<Cliente>(this.url, cliente);
  }
  modificar(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.url + cliente.id, cliente);
  }
  borrar(id: number): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
