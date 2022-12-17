import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesHomeComponent } from './tables-home/tables-home.component';
import { TablesComponent } from './tables/tables.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TablesHomeComponent,
    TablesComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    SharedModule
  ]
})
export class TablesModule { }
