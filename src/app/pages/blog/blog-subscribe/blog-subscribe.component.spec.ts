import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BlogSubscribeComponent} from './blog-subscribe.component';

describe('NewsSubscribeComponent', () => {
  let component: BlogSubscribeComponent;
  let fixture: ComponentFixture<BlogSubscribeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogSubscribeComponent]
    });
    fixture = TestBed.createComponent(BlogSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
