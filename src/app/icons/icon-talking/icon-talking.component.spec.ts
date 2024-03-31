import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IconTalkingComponent} from './icon-talking.component';

describe('IconTalkingComponent', () => {
  let component: IconTalkingComponent;
  let fixture: ComponentFixture<IconTalkingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconTalkingComponent]
    });
    fixture = TestBed.createComponent(IconTalkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
