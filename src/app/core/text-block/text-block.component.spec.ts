import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TextBlockComponent} from './text-block.component';

describe('TextBlockComponent', () => {
  let component: TextBlockComponent;
  let fixture: ComponentFixture<TextBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TextBlockComponent]
    });
    fixture = TestBed.createComponent(TextBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
