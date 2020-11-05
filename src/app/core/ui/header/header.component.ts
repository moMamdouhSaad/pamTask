import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '../../services/loader.service';
@Component({
  selector: 'pam-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public loaderState$: Observable<boolean>;

  public constructor(private readonly loaderService: LoaderService) {}

  public ngOnInit(): void {
    this.loaderState$ = this.loaderService.loaderState$;
  }
}
