import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IconGitComponent} from './icon-git.component';

describe('IconLinuxComponent', () => {
  let component: IconGitComponent;
  let fixture: ComponentFixture<IconGitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconGitComponent]
    });
    fixture = TestBed.createComponent(IconGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
