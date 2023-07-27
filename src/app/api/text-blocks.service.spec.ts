import { TestBed } from '@angular/core/testing';

import { TextBlocksService } from './text-blocks.service';

describe('TextBlocksService', () => {
  let service: TextBlocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextBlocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
