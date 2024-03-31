import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IconNewsComponent} from './icon-news.component';

describe('IconNewsComponent', () => {
  let component: IconNewsComponent;
  let fixture: ComponentFixture<IconNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconNewsComponent]
    });
    fixture = TestBed.createComponent(IconNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
