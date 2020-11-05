import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private readonly loaderSubject = new BehaviorSubject<boolean>(true);
  public loaderState$ = this.loaderSubject.asObservable();

  public constructor() {}

  show() {
    this.loaderSubject.next(true);
  }
  hide() {
    this.loaderSubject.next(false);
  }
}
