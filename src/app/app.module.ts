import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { AppComponent } from './app.component';


FullCalendarModule.registerPlugins([
  dayGridPlugin,
  googleCalendarPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
])

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule // import the FullCalendar module! will make the FullCalendar component available
  ],
  providers: [
  //{
//	  provide: calendar_v3.Calendar,
//	  useFactory: 
//	    (auth: OAuth2Client) => new calendar_v3.Calendar({ auth }),
//	  deps: [OAuth2Client],
 // },
  //{
//	  provide: OAuth2Client,
//	  useValue: new OAuth2Client(
	  //'151589550792-5frthkj7odm7f959jc3h900ulihaelmd.apps.googleusercontent.com',
//	'yVCgZCfnnGUl9HPrvLjUmZvP',
//	    'www.google.com',
//	),
//},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
