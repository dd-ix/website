import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconInternetComponent } from './icon-internet.component';

describe('IconInternetComponent', () => {
  let component: IconInternetComponent;
  let fixture: ComponentFixture<IconInternetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconInternetComponent]
    });
    fixture = TestBed.createComponent(IconInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
