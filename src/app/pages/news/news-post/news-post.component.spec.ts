import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NewsPostComponent} from './news-post.component';

describe('NewsPostComponent', () => {
  let component: NewsPostComponent;
  let fixture: ComponentFixture<NewsPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsPostComponent]
    });
    fixture = TestBed.createComponent(NewsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
