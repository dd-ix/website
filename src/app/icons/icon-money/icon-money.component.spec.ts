import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMoneyComponent } from './icon-money.component';

describe('IconMoneyComponent', () => {
  let component: IconMoneyComponent;
  let fixture: ComponentFixture<IconMoneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconMoneyComponent]
    });
    fixture = TestBed.createComponent(IconMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
