import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { environment } from '../../environments/environment';
import { metaReducers, reducers } from '@state/index';
import { PowerEffects } from '@state/powers/power.effects';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers: metaReducers
    }),
    EffectsModule.forRoot([PowerEffects]),
    StoreRouterConnectingModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : Array,
  ],
})
export class StateModule {

  constructor(
    @Optional() @SkipSelf() parentStateModule: StateModule
  ) {
    if (parentStateModule) {
      throw new Error('StateModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule,
      providers: []
    };
  }

}
