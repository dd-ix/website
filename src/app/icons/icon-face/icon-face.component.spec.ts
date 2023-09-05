import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconFaceComponent } from './icon-face.component';

describe('IconFaceComponent', () => {
  let component: IconFaceComponent;
  let fixture: ComponentFixture<IconFaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconFaceComponent]
    });
    fixture = TestBed.createComponent(IconFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
