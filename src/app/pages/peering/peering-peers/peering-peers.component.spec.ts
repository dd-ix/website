import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeeringPeersComponent } from './peering-peers.component';

describe('PeeringPeerListComponent', () => {
  let component: PeeringPeersComponent;
  let fixture: ComponentFixture<PeeringPeersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeeringPeersComponent]
    });
    fixture = TestBed.createComponent(PeeringPeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
