import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from './core/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public loaderState$: Observable<boolean>;

  public constructor(private readonly loaderService: LoaderService) {
    this.loaderState$ = this.loaderService.loaderState$;
  }
}
