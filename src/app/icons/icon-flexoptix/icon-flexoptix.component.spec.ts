import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconFlexoptixComponent } from './icon-flexoptix.component';

describe('IconFlexoptixComponent', () => {
  let component: IconFlexoptixComponent;
  let fixture: ComponentFixture<IconFlexoptixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconFlexoptixComponent]
    });
    fixture = TestBed.createComponent(IconFlexoptixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
