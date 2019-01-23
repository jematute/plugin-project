import { TestBed } from '@angular/core/testing';

import { MyPluginService } from "./MyPluginService";

describe('MyPluginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyPluginService = TestBed.get(MyPluginService);
    expect(service).toBeTruthy();
  });
});
