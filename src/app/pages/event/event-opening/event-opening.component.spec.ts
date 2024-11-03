import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventOpeningComponent } from './event-opening.component';

describe('EventOpeningComponent', () => {
  let component: EventOpeningComponent;
  let fixture: ComponentFixture<EventOpeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventOpeningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventOpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
