import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconRatingComponent } from './icon-rating.component';

describe('IconRatingComponent', () => {
  let component: IconRatingComponent;
  let fixture: ComponentFixture<IconRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconRatingComponent]
    });
    fixture = TestBed.createComponent(IconRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
