import { Component } from '@angular/core';
import { AsyncPipe, NgIf } from "@angular/common";
import { CardComponent } from "../../core/card/card.component";
import { StatsService } from "../../api/stats.service";
import { Series, TimeSelection } from "../../api/stats.domain";
import { ButtonComponent } from '@feel/form';
import { StatsTimeSelectionComponent } from "../../core/stats-time-selection/stats-time-selection.component";
import { BehaviorSubject, Subject, switchMap } from 'rxjs';
import { ChartComponent } from '../../core/chart/chart.component';

@Component({
    selector: 'app-stats',
    templateUrl: './stats.component.html',
    styleUrl: './stats.component.scss',
    imports: [
    AsyncPipe,
    NgIf,
    CardComponent,
    ButtonComponent,
    StatsTimeSelectionComponent,
    ChartComponent
]
})
export class StatsComponent {

  private readonly timeSelection = new BehaviorSubject<TimeSelection>(TimeSelection.LastWeek);
  protected readonly series = this.timeSelection.pipe(switchMap(selection => this.statsService.getTrafficStats(selection)));

  constructor(
    private readonly statsService: StatsService,
  ) {
  }

  protected changeTimeSelection(selection: TimeSelection): void {
    this.timeSelection.next(selection);
  }

  protected wrapStats(series: Series<[number, number][]>): ApexAxisChartSeries {
    return [{
      name: $localize`Traffic`,
      data: series.data.map(([time, value]) => [time * 1000, value]),
    }]
  }
}

