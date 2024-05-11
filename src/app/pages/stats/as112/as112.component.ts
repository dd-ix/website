import { Component } from '@angular/core';
import { StatsService } from '../../../api/stats.service';
import { ApexAxisChartSeries } from 'ng-apexcharts-lazy';
import { Series } from '../../../api/stats.domain';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { CardComponent } from '../../../core/card/card.component';
import { ChartComponent } from '../../../core/chart/chart.component';
import { ButtonComponent } from '@feel/form';

@Component({
  selector: 'app-as112',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    ChartComponent,
    CardComponent,
    JsonPipe,
    ButtonComponent,
  ],
  templateUrl: './as112.component.html',
  styleUrl: './as112.component.scss'
})
export class As112Component {

  protected readonly stats = this.statsService.getAs112Stats();

  constructor(
    private readonly statsService: StatsService,
  ) {
  }

  protected wrapStats(series: Series): ApexAxisChartSeries {
    return [{
      name: $localize`Queries`,
      data: series.data.map(([time, value]) => [time * 1000, value]),
      color: '#209680'
    }];
  }
}
