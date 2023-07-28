import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeeringServicePeeringComponent } from './peering-service-peering.component';

describe('PeeringServicePeeringComponent', () => {
  let component: PeeringServicePeeringComponent;
  let fixture: ComponentFixture<PeeringServicePeeringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeeringServicePeeringComponent]
    });
    fixture = TestBed.createComponent(PeeringServicePeeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
