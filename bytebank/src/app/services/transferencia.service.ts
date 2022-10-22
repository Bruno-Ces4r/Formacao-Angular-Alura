import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Transferencia } from 'src/models/transferencia.model';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listatransferencia?: any[] = []; // Array de qualquer tipo
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {} // Peguei o HttpClient

  get transferencias() {
    return this.listatransferencia; // Retorno a lista quando solicitado por algum component
  }

  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  } //Falei q é um observable de um array dessa interface e então eu pego o get dele pela url

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia); // Eu trato a questão da data

    return this.httpClient.post<Transferencia>(this.url, transferencia);
  } // falei q é um observable da interface Transferencia, ele retorna o resultado disso

  private hidratar(transferencia: any) {
    transferencia.data = new Date(); // coloco a data no objeto
  }
}
