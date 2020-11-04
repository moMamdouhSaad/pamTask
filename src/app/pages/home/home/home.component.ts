import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first, map, take } from 'rxjs/operators';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public post = {
    title: 'If you wanted to get rich, how would you do it?',
  };

  public allPosts$: Observable<any>;

  public constructor(
    private readonly router: Router,
    private readonly postService: PostsService
  ) {}

  public ngOnInit(): void {
    this.allPosts$ = this.postService.getAllPosts$();
    this.allPosts$.subscribe((data) => console.log(data));
  }

  public postClicked(post: any) {
    this.postService.setPostDetails(post);
    this.router.navigate(['/posts', post.id]);
  }
}
