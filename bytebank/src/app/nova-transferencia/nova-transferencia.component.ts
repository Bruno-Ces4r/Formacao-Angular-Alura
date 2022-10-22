import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';

import { Transferencia } from 'src/models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  constructor(
    private transferencia: TransferenciaService,
    private route: Router
  ) {}

  valor!: number;
  destino!: string;

  transferir() {
    console.log('Solicitando transferencia!');
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.transferencia.adicionar(valorEmitir).subscribe(
      (res) => {
        console.log(res);
        this.limparCampos();
        this.route.navigateByUrl('extrato');
      },
      (error) => console.log(error)
    ); // Eu já emito direto para  o adicionar do meu service e caso dê erro eu printo ele
    // this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = '';
  }
}
