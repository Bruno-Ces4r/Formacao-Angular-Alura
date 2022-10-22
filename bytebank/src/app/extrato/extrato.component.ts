import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import { Transferencia } from 'src/models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transferencias?: any[];

  constructor(private transferencia: TransferenciaService) {}

  ngOnInit() {
    this.transferencia.todas().subscribe((res: Transferencia[]) => {
      console.table(res);
      this.transferencias = res;
    });
  }
}
