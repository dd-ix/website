import { ComponentFixture, TestBed } from '@angular/core/testing';

import { As112Component } from './as112.component';

describe('As112Component', () => {
  let component: As112Component;
  let fixture: ComponentFixture<As112Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [As112Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(As112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
