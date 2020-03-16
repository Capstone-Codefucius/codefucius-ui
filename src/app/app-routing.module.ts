import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { LoginComponent} from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { RevieweeComponent} from './reviewee/reviewee.component';
import { ReviewerComponent } from './reviewer/reviewer.component';

//made changed 10/30
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'reviewee', component: RevieweeComponent },
  { path: 'reviewer', component: ReviewerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }