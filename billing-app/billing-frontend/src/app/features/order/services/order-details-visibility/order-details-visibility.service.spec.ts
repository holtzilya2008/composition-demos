import { TestBed } from '@angular/core/testing';

import { OrderDetailsVisibilityService } from './order-details-visibility.service';

describe('OrderDetailsVisibilityService', () => {
  let service: OrderDetailsVisibilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderDetailsVisibilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
