import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconIbhComponent } from './icon-ibh.component';

describe('IconIhbComponent', () => {
  let component: IconIbhComponent;
  let fixture: ComponentFixture<IconIbhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconIbhComponent]
    });
    fixture = TestBed.createComponent(IconIbhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
