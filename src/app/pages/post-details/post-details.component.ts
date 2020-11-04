import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  post$: Observable<any>;
  comments$: Observable<any[]>;

  public constructor(
    private readonly postsService: PostsService,
    private readonly _route: ActivatedRoute,
    private readonly router: Router
  ) {
    //Rederict to home page if user try to refresh the page
    this.postsService.getPostDetails$().subscribe((post) => {
      if (!post) {
        this.router.navigate(['../']);
      }
    });
  }

  public ngOnInit(): void {
    const id = parseInt(this._route.snapshot.params['id']);
    this.post$ = this.postsService.getPostDetails$();
    this.comments$ = this.postsService.getComments$(id);
  }

  public addComment(comment: any): void {
    const newComment = {
      ...comment,
      postId: parseInt(this._route.snapshot.params['id']),
    };
    console.log(newComment);
    this.postsService.addComment(newComment);
  }
}
