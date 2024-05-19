import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsTimeSelectionComponent } from './stats-time-selection.component';

describe('StatsTimeSelectionComponent', () => {
  let component: StatsTimeSelectionComponent;
  let fixture: ComponentFixture<StatsTimeSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsTimeSelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatsTimeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
