import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { LoginComponent} from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { RevieweeComponent} from './reviewee/reviewee.component';
import { ReviewerComponent } from './reviewer/reviewer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RequestComponent } from './code-request/code-request.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'reviewee', component: RevieweeComponent },
  { path: 'reviewer', component: ReviewerComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'request', component: RequestComponent },
  { path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }