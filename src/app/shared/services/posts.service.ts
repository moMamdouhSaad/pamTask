import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Post, ApiResponse, Comment } from '../utils/interfaces';
const defaultComments = [
  {
    postId: 1,
    username: 'mohamed',
    email: 'email@test.com',
    content: 'Comment content',
  },
  {
    postId: 1,
    username: 'mohamed',
    email: 'email@test.com',
    content: 'Comment content',
  },

  {
    postId: 2,
    username: 'mohamed',
    email: 'email@test.com',
    content: 'Comment content',
  },

  {
    postId: 3,
    username: 'mohamed',
    email: 'email@test.com',
    content: 'Comment content',
  },

  {
    postId: 4,
    username: 'mohamed',
    email: 'email@test.com',
    content: 'Comment content',
  },
  {
    postId: 5,
    username: 'mohamed',
    email: 'email@test.com',
    content: 'Comment content',
  },
  {
    postId: 6,
    username: 'mohamed',
    email: 'email@test.com',
    content: 'Comment content',
  },
  {
    postId: 7,
    username: 'mohamed',
    email: 'email@test.com',
    content: 'Comment content',
  },
  {
    postId: 8,
    username: 'mohamed',
    email: 'email@test.com',
    content: 'Comment content',
  },
  {
    postId: 9,
    username: 'mohamed',
    email: 'email@test.com',
    content: 'Comment content',
  },
  {
    postId: 10,
    username: 'mohamed',
    email: 'email@test.com',
    content: 'Comment content',
  },
];
/*
error:
code: "corsNotAllowed"
message: "Requests from the browser are not allowed on the Developer plan, except from localhost."
status: "error"
*/

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly postDetailsSubject = new BehaviorSubject<Post>(null);
  private readonly commentsSubject = new BehaviorSubject<Comment[]>(
    defaultComments
  );

  constructor(private readonly http: HttpClient) {}

  public getAllPosts$(): Observable<Post[]> {
    return this.http.get<ApiResponse>(environment.api).pipe(
      map((response) =>
        response.articles.map((article, i) => {
          article.id = i + 1;
          return article;
        })
      )
    );
  }

  public setPostDetails(post: Post): void {
    this.postDetailsSubject.next(post);
  }

  public getPostDetails$(): Observable<Post> {
    return this.postDetailsSubject.asObservable();
  }

  public getComments$(postId: number): Observable<Comment[]> {
    return this.commentsSubject
      .asObservable()
      .pipe(
        map((comments) =>
          comments.filter((comment) => comment.postId === postId)
        )
      );
  }

  public addComment(comment: Comment): void {
    const comments = this.commentsSubject.getValue();
    this.commentsSubject.next([...comments, comment]);
  }
}
