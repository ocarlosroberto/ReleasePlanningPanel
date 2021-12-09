import { Component, OnInit } from '@angular/core';
import { CapacityService } from 'src/app/services/capacity.service';
import { Envolvimento } from './../../models/Envolvimento.model';

@Component({
  selector: 'app-envolvimentos',
  templateUrl: './envolvimentos.component.html',
  styleUrls: ['./envolvimentos.component.scss']
})
export class EnvolvimentosComponent implements OnInit {

  displayedColumns: string[] = ['demanda', 'iniciativa', 'entrega', 'feature', 'racional', 'descricao', 'tipo_envolvimento', 'horas', 'acumulado'];
  dataSource: Envolvimento[] = [];
  acumulado: number = 0;

  constructor(private capacityService: CapacityService) { }

  ngOnInit(): void {
    this.capacityService.getEnvolvimentos().subscribe(
      (e) => {
        this.dataSource = e;

        e.forEach((env) => {
          this.acumulado += env.horas;
          env.acumulado = this.acumulado;
        });

      },
      (error) => {
        console.error('Erro ao obter os dados da API');
      }
    );
  }

}
