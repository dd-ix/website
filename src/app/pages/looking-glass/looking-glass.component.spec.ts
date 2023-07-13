import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LookingGlassComponent} from './looking-glass.component';

describe('LookingGlassComponent', () => {
  let component: LookingGlassComponent;
  let fixture: ComponentFixture<LookingGlassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LookingGlassComponent]
    });
    fixture = TestBed.createComponent(LookingGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
