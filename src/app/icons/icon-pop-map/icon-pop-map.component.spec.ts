import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IconPopMapComponent} from './icon-pop-map.component';

describe('IconPopMapComponent', () => {
  let component: IconPopMapComponent;
  let fixture: ComponentFixture<IconPopMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconPopMapComponent]
    });
    fixture = TestBed.createComponent(IconPopMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
