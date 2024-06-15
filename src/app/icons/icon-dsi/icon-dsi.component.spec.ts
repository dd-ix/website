import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IconDsiComponent} from './icon-dsi.component';

describe('IconDsiComponent', () => {
  let component: IconDsiComponent;
  let fixture: ComponentFixture<IconDsiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconDsiComponent]
    });
    fixture = TestBed.createComponent(IconDsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
