import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PeeringPolicyComponent} from './peering-policy.component';

describe('PeeringPolicyComponent', () => {
  let component: PeeringPolicyComponent;
  let fixture: ComponentFixture<PeeringPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeeringPolicyComponent]
    });
    fixture = TestBed.createComponent(PeeringPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
