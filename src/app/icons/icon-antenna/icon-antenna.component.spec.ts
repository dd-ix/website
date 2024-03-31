import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IconAntennaComponent} from './icon-antenna.component';

describe('IconAntennaComponent', () => {
  let component: IconAntennaComponent;
  let fixture: ComponentFixture<IconAntennaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconAntennaComponent]
    });
    fixture = TestBed.createComponent(IconAntennaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
