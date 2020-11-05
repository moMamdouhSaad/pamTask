import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostsService } from 'src/app/shared/services/posts.service';
import { Post } from 'src/app/shared/utils/interfaces';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public allPosts$: Observable<Post[]>;

  public constructor(
    private readonly router: Router,
    private readonly postService: PostsService
  ) {}

  public ngOnInit(): void {
    this.allPosts$ = this.postService.getAllPosts$();
  }

  public postClicked(post: Post): void {
    this.postService.setPostDetails(post);
    this.router.navigate(['/posts', post.id]);
  }
}
