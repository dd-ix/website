import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IconCheckmarkComponent} from './icon-checkmark.component';

describe('IconCheckmarkComponent', () => {
  let component: IconCheckmarkComponent;
  let fixture: ComponentFixture<IconCheckmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconCheckmarkComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(IconCheckmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
