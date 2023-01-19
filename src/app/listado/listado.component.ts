import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { CLIENTES } from '../mock-clientes';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  clientes: Cliente[] = CLIENTES;

  borrar(id: number): void {
    const i = CLIENTES.findIndex(c => c.id === id);
    CLIENTES.splice(i, 1);
  }
}
