import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IconRipeComponent} from './icon-ripe.component';

describe('IconRipeComponent', () => {
  let component: IconRipeComponent;
  let fixture: ComponentFixture<IconRipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconRipeComponent]
    });
    fixture = TestBed.createComponent(IconRipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
