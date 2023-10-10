import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceAndLegalComponent } from './finance-and-legal.component';

describe('FinanceAndLegalComponent', () => {
  let component: FinanceAndLegalComponent;
  let fixture: ComponentFixture<FinanceAndLegalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FinanceAndLegalComponent]
    });
    fixture = TestBed.createComponent(FinanceAndLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
