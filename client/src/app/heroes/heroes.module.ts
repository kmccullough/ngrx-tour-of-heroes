import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { IndexComponent } from './containers/index/index.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MatButtonModule,
  ],
  declarations: [IndexComponent]
})
export class HeroesModule { }
