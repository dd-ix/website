import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSwitchComponent } from './icon-switch.component';

describe('IconSwitchComponent', () => {
  let component: IconSwitchComponent;
  let fixture: ComponentFixture<IconSwitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconSwitchComponent]
    });
    fixture = TestBed.createComponent(IconSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
