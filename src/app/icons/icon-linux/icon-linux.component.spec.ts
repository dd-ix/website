import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IconLinuxComponent} from './icon-linux.component';

describe('IconLinuxComponent', () => {
  let component: IconLinuxComponent;
  let fixture: ComponentFixture<IconLinuxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconLinuxComponent]
    });
    fixture = TestBed.createComponent(IconLinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
