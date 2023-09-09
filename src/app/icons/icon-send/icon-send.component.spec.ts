import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSendComponent } from './icon-send.component';

describe('IconSendComponent', () => {
  let component: IconSendComponent;
  let fixture: ComponentFixture<IconSendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconSendComponent]
    });
    fixture = TestBed.createComponent(IconSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
