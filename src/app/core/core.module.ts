import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './ui/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProgressBarComponent } from './ui/progress-bar/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptorService } from './services/loader-interceptor.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, ProgressBarComponent],
  imports: [CommonModule, FlexLayoutModule, MatProgressBarModule, RouterModule],
  exports: [HeaderComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
