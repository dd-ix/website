import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PeeringLocationsComponent} from './peering-locations.component';

describe('PeeringLocationsComponent', () => {
  let component: PeeringLocationsComponent;
  let fixture: ComponentFixture<PeeringLocationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeeringLocationsComponent]
    });
    fixture = TestBed.createComponent(PeeringLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
