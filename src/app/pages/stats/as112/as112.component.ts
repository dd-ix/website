import { Component } from '@angular/core';
import { StatsService } from '../../../api/stats.service';
import { Series, TimeSelection } from '../../../api/stats.domain';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { CardComponent } from '../../../core/card/card.component';
import { ChartComponent } from '../../../core/chart/chart.component';
import { ButtonComponent } from '@feel/form';
import { BehaviorSubject, switchMap } from 'rxjs';
import { StatsTimeSelectionComponent } from "../../../core/stats-time-selection/stats-time-selection.component";

@Component({
  selector: 'app-as112',
  standalone: true,
  templateUrl: './as112.component.html',
  styleUrl: './as112.component.scss',
  imports: [
    AsyncPipe,
    NgIf,
    ChartComponent,
    CardComponent,
    JsonPipe,
    ButtonComponent,
    StatsTimeSelectionComponent
  ]
})
export class As112Component {

  private readonly timeSelection = new BehaviorSubject<TimeSelection>(TimeSelection.LastWeek);
  protected readonly series = this.timeSelection.pipe(switchMap(selection => this.statsService.getAs112Stats(selection)));

  constructor(
    private readonly statsService: StatsService,
  ) {
  }

  protected changeTimeSelection(selection: TimeSelection): void {
    this.timeSelection.next(selection);
  }

  protected wrapStats(series: Series): ApexAxisChartSeries {
    return [{
      name: $localize`Queries`,
      data: series.data.map(([time, value]) => [time * 1000, value]),
      color: '#209680'
    }];
  }
}
