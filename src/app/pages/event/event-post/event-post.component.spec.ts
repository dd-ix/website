import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EventPostComponent} from './event-post.component';

describe('NewsPostComponent', () => {
  let component: EventPostComponent;
  let fixture: ComponentFixture<EventPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventPostComponent]
    });
    fixture = TestBed.createComponent(EventPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
