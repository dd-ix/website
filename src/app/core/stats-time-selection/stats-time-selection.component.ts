import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TimeSelection } from '../../api/stats.domain';
import { DropdownComponent } from '@feel/form';

@Component({
    selector: 'app-stats-time-selection',
    imports: [ReactiveFormsModule, DropdownComponent],
    templateUrl: './stats-time-selection.component.html',
    styleUrl: './stats-time-selection.component.scss'
})
export class StatsTimeSelectionComponent implements OnInit, OnDestroy {

  @Output()
  private readonly timeChange = new EventEmitter<TimeSelection>();

  protected formControl = new FormControl(TimeSelection.LastWeek);
  private subscription: Subscription | undefined;

  ngOnInit(): void {
    this.timeChange.emit(this.formControl.value!);
    this.subscription = this.formControl.valueChanges
      .subscribe(value => this.timeChange.next(value as TimeSelection));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
