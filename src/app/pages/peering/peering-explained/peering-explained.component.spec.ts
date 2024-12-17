import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PeeringExplainedComponent} from './peering-explained.component';

describe('PeeringExplainedComponent', () => {
  let component: PeeringExplainedComponent;
  let fixture: ComponentFixture<PeeringExplainedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeeringExplainedComponent]
    });
    fixture = TestBed.createComponent(PeeringExplainedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
