import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './ui/post/post.component';
import { BoxComponent } from './ui/box/box.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [PostComponent, BoxComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [PostComponent, BoxComponent],
})
export class SharedModule {}
