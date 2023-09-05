import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSocialComponent } from './icon-social.component';

describe('IconSocialComponent', () => {
  let component: IconSocialComponent;
  let fixture: ComponentFixture<IconSocialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconSocialComponent]
    });
    fixture = TestBed.createComponent(IconSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
