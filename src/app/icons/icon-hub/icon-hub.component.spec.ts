import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IconHubComponent} from './icon-hub.component';

describe('IconHubComponent', () => {
  let component: IconHubComponent;
  let fixture: ComponentFixture<IconHubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconHubComponent]
    });
    fixture = TestBed.createComponent(IconHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
