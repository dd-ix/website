import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteServerComponent } from './route-server.component';

describe('BirdComponent', () => {
  let component: RouteServerComponent;
  let fixture: ComponentFixture<RouteServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteServerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
