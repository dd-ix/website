import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IconDirectionsComponent} from './icon-directions.component';

describe('IconDirectionsComponent', () => {
  let component: IconDirectionsComponent;
  let fixture: ComponentFixture<IconDirectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconDirectionsComponent]
    });
    fixture = TestBed.createComponent(IconDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
