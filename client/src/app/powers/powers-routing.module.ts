import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './containers/index/index.component';
import { EditComponent } from './containers/edit/edit.component';
import { AuthGuard } from '@core/guards/auth.guard';
import { IdResolver } from '@core/resolvers/id.resolver';
import { ResolversModule } from '@core/resolvers/resolvers.module';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    canActivate: [
      AuthGuard
    ],
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    resolve: [
      IdResolver
    ]
  }
];

@NgModule({
  imports: [
    ResolversModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class PowersRoutingModule { }
