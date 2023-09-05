import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconFrauenkircheComponent } from './icon-frauenkirche.component';

describe('IconFrauenkircheComponent', () => {
  let component: IconFrauenkircheComponent;
  let fixture: ComponentFixture<IconFrauenkircheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconFrauenkircheComponent]
    });
    fixture = TestBed.createComponent(IconFrauenkircheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
