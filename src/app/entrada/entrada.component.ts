import { Component, OnInit } from '@angular/core';
import { Entrada } from '../model/EntradaModel';
import { EntradaService } from '../entrada.service';
import { ClienteService } from '../cliente.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Cliente } from '../model/ClienteModel';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css'],
  providers: [EntradaService, ClienteService],
})
export class EntradaComponent implements OnInit {
  entrada: Entrada;
  entradas: Entrada[] = [];
  form: FormGroup = new FormGroup({
    id: new FormControl(),
    placa: new FormControl(),
    marca: new FormControl(),
    modelo: new FormControl(),
    cor: new FormControl(),
    
    
  });

  constructor(
    public entradaService: EntradaService,
    public clienteService: ClienteService,
    private formBuilder: FormBuilder
  ) {
    this.entrada = {
      id: 0,
      dataEntrada: 0,
      horaEntrada: 0,
      placa: '',
      marca: '',
      modelo: '',
      cor: '',
      preco: 0,
    };
  }

  dataSource: Array<Entrada> = [];
  clientes: Array<Cliente> = [];

  listarClientes(): void {
    this.clienteService.getCliente().subscribe((data: Cliente[]) => {
      data.forEach((i) => this.clientes.push(i));
      console.log(this.clientes);
    });
  }

  listar(): void {
    this.entradaService.getEntrada().subscribe((data: Entrada[]) => {
      data.forEach((i) => this.dataSource.push(i));
      console.log(this.dataSource);
    });
  }

  criarEntrada() {
    this.entradaService
      .criarEntrada(this.form.value)
      .subscribe((_result) => {});
    console.log(this.entrada);
  }

  onSubmit() {
    this.criarEntrada();
    console.log();
    this.ngOnInit;
  }

  ngOnInit() {
    this.listarClientes();
    this.listar();
    this.form = this.formBuilder.group({
      horaEntrada: [''],
      placa: [''],
      marca: [''],
      modelo: [''],
      cor: [''],
      
    });
  }
}
