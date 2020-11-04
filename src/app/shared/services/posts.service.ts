import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const defaultComments = [
  {
    postId: 1,
    username: 'mohamed',
    email: 'email@test.com',
    content: 'one',
  },
  {
    postId: 1,
    username: 'mohamed',
    email: 'email@test.com',
    content: 'onhiie',
  },

  {
    postId: 2,
    username: 'mohamed',
    email: 'email@test.com',
    content: 'two',
  },

  {
    postId: 3,
    username: 'mohamed',
    email: 'email@test.com',
    content: 'Three',
  },

  {
    postId: 4,
    username: 'mohamed',
    email: 'email@test.com',
    content: 'four',
  },
];
const apiUrl =
  'https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=33ba70d6367648b49a76910dfad62ad4';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly postDetailsSubject = new BehaviorSubject<any>(null);
  private readonly commentsSubject = new BehaviorSubject<any[]>(
    defaultComments
  );

  constructor(private readonly http: HttpClient) {}

  public getAllPosts$(): Observable<any[]> {
    return this.http.get<any[]>(apiUrl).pipe(
      map((response: any) =>
        response.articles.map((article, i) => {
          article.id = i + 1;
          return article;
        })
      )
    );
  }

  public setPostDetails(post: any): void {
    this.postDetailsSubject.next(post);
  }

  public getPostDetails$(): Observable<any> {
    return this.postDetailsSubject.asObservable();
  }

  // public setComments(comments: any[]): void {
  //   this.commentsSubject.next(comments);
  // }

  public getComments$(postId: number): Observable<any[]> {
    return this.commentsSubject
      .asObservable()
      .pipe(
        map((comments) =>
          comments.filter((comment) => comment.postId === postId)
        )
      );
  }

  public addComment(comment: any): void {
    const comments = this.commentsSubject.getValue();
    this.commentsSubject.next([...comments, comment]);
  }
}
