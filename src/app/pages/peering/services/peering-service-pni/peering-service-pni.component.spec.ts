import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PeeringServicePniComponent} from './peering-service-pni.component';

describe('PeeringServicePniComponent', () => {
  let component: PeeringServicePniComponent;
  let fixture: ComponentFixture<PeeringServicePniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeeringServicePniComponent]
    });
    fixture = TestBed.createComponent(PeeringServicePniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
