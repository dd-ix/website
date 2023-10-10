import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsAndSponsorsComponent } from './clients-and-sponsors.component';

describe('ClientsAndSponsorsComponent', () => {
  let component: ClientsAndSponsorsComponent;
  let fixture: ComponentFixture<ClientsAndSponsorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsAndSponsorsComponent]
    });
    fixture = TestBed.createComponent(ClientsAndSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
