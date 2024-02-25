import {Component} from '@angular/core';
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {ChartComponent} from "../../core/chart/chart.component";
import {CardComponent} from "../../core/card/card.component";
import {StatsService} from "../../api/stats.service";
import {Series} from "../../api/stats.domain";
import {ApexAxisChartSeries} from "ng-apexcharts-lazy";

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    ChartComponent,
    CardComponent,
    JsonPipe,
  ],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {

  protected readonly stats = this.statsService.getStats();

  constructor(
    private readonly statsService: StatsService,
  ) {
  }

  protected wrapStats(series: Series): ApexAxisChartSeries {
    return [{
      name: "Traffic",
      data: series.data.map(([time, value]) => [time * 1000, value]),
      color: '#209680'
    }]
  }
}

