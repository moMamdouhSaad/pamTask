import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FlexLayoutModule,
    RouterModule,
  ],
})
export class HomeModule {}
