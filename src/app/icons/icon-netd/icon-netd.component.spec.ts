import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IconNetdComponent} from './icon-netd.component';

describe('IconNetdComponent', () => {
  let component: IconNetdComponent;
  let fixture: ComponentFixture<IconNetdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconNetdComponent]
    });
    fixture = TestBed.createComponent(IconNetdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
