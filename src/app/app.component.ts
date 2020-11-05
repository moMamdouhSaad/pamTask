import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from './core/services/loader.service';
import { ChangeDetectorRef, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterContentChecked {
  public loaderState$: Observable<boolean>;

  public constructor(
    private readonly loaderService: LoaderService,
    private readonly cdref: ChangeDetectorRef
  ) {
    this.loaderState$ = this.loaderService.loaderState$;
  }
  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }
}
