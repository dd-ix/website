import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMenuComponent } from './icon-menu.component';

describe('AppMenuComponent', () => {
  let component: IconMenuComponent;
  let fixture: ComponentFixture<IconMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconMenuComponent]
    });
    fixture = TestBed.createComponent(IconMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
