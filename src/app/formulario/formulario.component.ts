import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  cliente: Cliente = { id: 0, nombre: '', apellidos: '', telefono: '', email: '' };

  constructor(private clienteService: ClienteService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {

    const id: string | null = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.clienteService.obtenerPorId(+id).subscribe(
        cliente => this.cliente = cliente!
      );
    }
  }

  guardar() {
    if (this.cliente.id) {
      this.clienteService.modificar(this.cliente).subscribe();
    } else {
      this.clienteService.insertar(this.cliente).subscribe();
    }
    
    this.location.back();
  }
}
