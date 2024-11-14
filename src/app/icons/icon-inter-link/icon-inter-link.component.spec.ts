import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IconInterLinkComponent} from './icon-inter-link.component';

describe('IconBcixComponent', () => {
  let component: IconInterLinkComponent;
  let fixture: ComponentFixture<IconInterLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconInterLinkComponent]
    });
    fixture = TestBed.createComponent(IconInterLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
