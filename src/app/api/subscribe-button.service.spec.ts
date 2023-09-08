import {TestBed} from '@angular/core/testing';

import {SubscribeButtonService} from './subscribe-button.service';

describe('NewsService', () => {
  let service: SubscribeButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscribeButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
