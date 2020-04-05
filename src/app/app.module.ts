import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RevieweeComponent } from './reviewee/reviewee.component';
import { ReviewerComponent } from './reviewer/reviewer.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { NavComponent } from './nav/nav.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsModule } from '@angular/forms';
import { RequestComponent } from './code-request/code-request.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//custom class made for material
import { MaterialModule } from './material';
import { ReviewService } from './services/review/review.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RevieweeComponent,
    ReviewerComponent,
    AdminComponent,
    ManagerComponent,
    NavComponent,
    FeedbackComponent,
    RequestComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ReviewService],
  bootstrap: [AppComponent],
  entryComponents:[RequestComponent],
})
export class AppModule { }
