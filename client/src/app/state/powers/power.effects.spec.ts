import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { PowerEffects } from './power.effects';

describe('PowerService', () => {
  let actions$: Observable<any>;
  let effects: PowerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PowerEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(PowerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
