import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSubscribeComponent } from './news-subscribe.component';

describe('NewsSubscribeComponent', () => {
  let component: NewsSubscribeComponent;
  let fixture: ComponentFixture<NewsSubscribeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsSubscribeComponent]
    });
    fixture = TestBed.createComponent(NewsSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
