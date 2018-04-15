import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { LessonsLearntComponent } from './lessons-learnt/lessons-learnt.component';
import { RestfulApiComponent } from './restful-api/restful-api.component';
import { ContactComponent } from './contact/contact.component';
import { ConcertCalendarComponent } from './concert-calendar/concert-calendar.component';

const routes: Routes = [
  { component: MainComponent, path: 'main' },
  { component: ProfileComponent, path: 'profile' },
  { component: LessonsLearntComponent, path: 'lessons-learnt' },
  { component: RestfulApiComponent, path: 'restful-api' },
  { component: ContactComponent, path: 'contact' },
  { component: ConcertCalendarComponent, path: 'concert-calendar' }];


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
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
