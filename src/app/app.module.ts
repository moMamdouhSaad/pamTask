import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from '../app/core/core.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from './pages/home/home.module';
const routes = [
  {
    path: 'posts/:id',
    loadChildren: () =>
      import('./pages/post-details/post-details.module').then(
        (m) => m.PostDetailsModule
      ),
  },
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(routes),
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
