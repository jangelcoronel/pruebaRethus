import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PageInitialComponent } from './components/page-initial/page-initial.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    PageInitialComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
})
export class HomeModule { }
