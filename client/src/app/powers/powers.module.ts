import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { PowersComponent } from './components/powers/powers.component';
import { EditPowerComponent } from './components/edit-power/edit-power.component';
import { EditComponent } from './containers/edit/edit.component';
import { IndexComponent } from './containers/index/index.component';
import { PowersRoutingModule } from './powers-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PowersRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  declarations: [
    IndexComponent,
    PowersComponent,
    EditComponent,
    EditPowerComponent
  ]
})
export class PowersModule { }
