import { Component, OnInit } from '@angular/core';
import { Saida } from '../model/SaidaModel';
import { SaidaService } from '../saida.service';
import { EntradaService } from '../entrada.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Entrada } from '../model/EntradaModel';

@Component({
  selector: 'app-saida',
  templateUrl: './saida.component.html',
  styleUrls: ['./saida.component.css'],
  providers: [SaidaService, EntradaService],
})

export class SaidaComponent implements OnInit {
  saida: Saida;
  saidas: Saida[] = [];
  form: FormGroup = new FormGroup({
    id: new FormControl(),
    placa: new FormControl(),
    horaEntrada: new FormControl(),
    horaSaida: new FormControl(),
    preco: new FormControl()
  });

  constructor(
    public saidaService: SaidaService,
    public entradaService: EntradaService,
    private formBuilder: FormBuilder
  ) {
    this.saida = {
      id: 0,
      cliente: {
        id: 0
      },
      placa: '',
      horaEntrada: '',
      horaSaida: '',
      preco: '',
    };
  }

  dataSource: Array<Saida> = [];
  entradas: Array<Entrada> = [];


  listarEntradas(): void {
    this.entradaService.getEntrada().subscribe((data: Entrada[]) => {
      data.forEach((i) => this.entradas.push(i));
      console.log(this.entradas);
    });
  }


  listar(): void {
    this.saidaService.getSaida().subscribe((data: Saida[]) => {
      data.forEach((i) => this.dataSource.push(i));
      console.log(this.dataSource);
    });
  }



  ngOnInit() {
    this.listarEntradas();
    this.listar();
    this.form = this.formBuilder.group({
      placa: [''],
       
    });
  }







}
