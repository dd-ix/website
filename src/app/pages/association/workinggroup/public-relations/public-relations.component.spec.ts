import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicRelationsComponent } from './public-relations.component';

describe('PublicRelationsComponent', () => {
  let component: PublicRelationsComponent;
  let fixture: ComponentFixture<PublicRelationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PublicRelationsComponent]
    });
    fixture = TestBed.createComponent(PublicRelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
