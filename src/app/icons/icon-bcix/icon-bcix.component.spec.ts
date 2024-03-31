import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IconBcixComponent} from './icon-bcix.component';

describe('IconBcixComponent', () => {
  let component: IconBcixComponent;
  let fixture: ComponentFixture<IconBcixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconBcixComponent]
    });
    fixture = TestBed.createComponent(IconBcixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
