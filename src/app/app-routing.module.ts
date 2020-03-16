import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewerComponent } from './reviewer/reviewer.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '/reviewer',
    component: ReviewerComponent,
  },
  {
    path: '',
    component: AppComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
