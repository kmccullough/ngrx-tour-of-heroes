import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { PowersService } from './services/powers.service';
import { AuthService } from '@core/services/auth.service';
import { AuthGuard } from '@core/guards/auth.guard';
import { ResolversModule } from '@core/resolvers/resolvers.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [
    AuthGuard,
    AuthService,
    PowersService
  ],
})
export class CoreModule {

  constructor(
    @Optional() @SkipSelf() parentCoreModule: CoreModule
  ) {
    if (parentCoreModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }

}
