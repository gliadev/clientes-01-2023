import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../cliente';
import { CLIENTES } from '../mock-clientes';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  cliente: Cliente = { id: 0, nombre: '', apellidos: '', telefono: '', email: '' };

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {

    const id: string | null = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.cliente = CLIENTES.find(c => c.id === +id)!;
    }
  }

  guardar() {
    if (this.cliente.id) {
      const i = CLIENTES.findIndex(c => c.id === this.cliente.id);
      CLIENTES[i] = this.cliente;
    } else {
      CLIENTES.push(this.cliente);
      this.cliente.id = (Math.max(...CLIENTES.map(c => c.id))) + 1;
    }
    
    this.location.back();
  }
}
