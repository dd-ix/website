import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SubscribeButtonComponent} from './subscribe-button.component';

describe('SubscribeButtonComponent', () => {
  let component: SubscribeButtonComponent;
  let fixture: ComponentFixture<SubscribeButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscribeButtonComponent]
    });
    fixture = TestBed.createComponent(SubscribeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
