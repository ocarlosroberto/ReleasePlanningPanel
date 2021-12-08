import { Component, OnInit } from '@angular/core';
import { CapacityService } from './../../services/capacity.service';

@Component({
  selector: 'app-capacity',
  templateUrl: './capacity.component.html',
  styleUrls: ['./capacity.component.scss'],
})

export class CapacityComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'cargo', 'horas', 'tipo'];
  dataSource: any = [];
  totalSuporte: number = 0;
  totalCapacity: number = 0;
  diasRelease: number = 0;

  constructor(private capacityService: CapacityService) { }

  ngOnInit(): void {
    this.capacityService.getCapacity().subscribe(
      (c) => {
        this.dataSource = c.time;
        
        c.time.forEach((p) => {
          this.totalCapacity += p.horas;
        });
        
        this.totalSuporte = this.totalCapacity * (c.perc_suporte / 100);
        this.totalCapacity = this.totalCapacity - this.totalSuporte;
        this.diasRelease = c.dias_release;
      },
      (error) => {
        console.error('Erro ao obter os dados da API');
      }
    );
  }
}
