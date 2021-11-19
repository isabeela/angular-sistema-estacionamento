export interface Saida {
  id: number;
  cliente: {
    id: number;
  }
  placa: string;
  horaEntrada: string;
  horaSaida: string;
  preco: string;
}
