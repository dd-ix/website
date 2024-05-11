import {Component} from '@angular/core';
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {ChartComponent} from "../../core/chart/chart.component";
import {CardComponent} from "../../core/card/card.component";
import {StatsService} from "../../api/stats.service";
import {Series} from "../../api/stats.domain";
import {ApexAxisChartSeries} from "ng-apexcharts-lazy";
import { ButtonComponent } from '@feel/form';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    ChartComponent,
    CardComponent,
    JsonPipe,
    ButtonComponent,
  ],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {

  protected readonly stats = this.statsService.getTrafficStats();

  constructor(
    private readonly statsService: StatsService,
  ) {
  }

  protected wrapStats(series: Series): ApexAxisChartSeries {
    return [{
      name: $localize`Traffic`,
      data: series.data.map(([time, value]) => [time * 1000, value]),
      color: '#209680'
    }]
  }
}

