import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IconFediComponent} from './icon-fedi.component';

describe('IconFediComponent', () => {
  let component: IconFediComponent;
  let fixture: ComponentFixture<IconFediComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconFediComponent]
    });
    fixture = TestBed.createComponent(IconFediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
