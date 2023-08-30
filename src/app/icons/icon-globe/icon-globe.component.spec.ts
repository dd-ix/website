import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconGlobeComponent } from './icon-globe.component';

describe('IconGlobeComponent', () => {
  let component: IconGlobeComponent;
  let fixture: ComponentFixture<IconGlobeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconGlobeComponent]
    });
    fixture = TestBed.createComponent(IconGlobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
