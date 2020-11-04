import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailsComponent } from './post-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [{ path: '', component: PostDetailsComponent }];

@NgModule({
  declarations: [PostDetailsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class PostDetailsModule {}
