import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPartyComponent } from './icon-party.component';

describe('IconPartyComponent', () => {
  let component: IconPartyComponent;
  let fixture: ComponentFixture<IconPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconPartyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
