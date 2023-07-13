import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IconLogoComponent} from './icon-logo.component';

describe('LogoComponent', () => {
  let component: IconLogoComponent;
  let fixture: ComponentFixture<IconLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconLogoComponent]
    });
    fixture = TestBed.createComponent(IconLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
