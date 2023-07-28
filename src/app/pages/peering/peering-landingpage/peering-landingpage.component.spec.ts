import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeeringLandingpageComponent } from './peering-landingpage.component';

describe('PeeringLandingpageComponent', () => {
  let component: PeeringLandingpageComponent;
  let fixture: ComponentFixture<PeeringLandingpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeeringLandingpageComponent]
    });
    fixture = TestBed.createComponent(PeeringLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
