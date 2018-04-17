import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { LessonsLearntComponent } from './lessons-learnt/lessons-learnt.component';
import { RestfulApiComponent } from './restful-api/restful-api.component';
import { ContactComponent } from './contact/contact.component';
import { ConcertCalendarComponent } from './concert-calendar/concert-calendar.component';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'lessons-learnt', component: LessonsLearntComponent },
  { path: 'restful-api', component: RestfulApiComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'concert-calendar', component: ConcertCalendarComponent }];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProfileComponent,
    LessonsLearntComponent,
    RestfulApiComponent,
    ContactComponent,
    ConcertCalendarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
