import { TestBed } from '@angular/core/testing';

import { MyPlugin2Service } from './my-plugin2.service';

describe('MyPlugin2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyPlugin2Service = TestBed.get(MyPlugin2Service);
    expect(service).toBeTruthy();
  });
});
