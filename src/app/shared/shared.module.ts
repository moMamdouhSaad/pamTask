import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './ui/post/post.component';
import { BoxComponent } from './ui/box/box.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { CommentComponent } from './ui/comment/comment.component';
import { CommentFormComponent } from './ui/comment-form/comment-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PostComponent,
    BoxComponent,
    CommentComponent,
    CommentFormComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    PostComponent,
    BoxComponent,
    CommentComponent,
    CommentFormComponent,
  ],
  providers: [],
})
export class SharedModule {}
