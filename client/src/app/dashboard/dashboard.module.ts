import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material";

import { IndexComponent } from './containers/index/index.component';
import { DashboardRoutingModule } from "./dashboard-routing.module";

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
  ],
  declarations: [IndexComponent]
})
export class DashboardModule { }
