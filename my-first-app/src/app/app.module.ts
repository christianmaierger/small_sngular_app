import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhereToGoComponent } from './where-to-go/where-to-go.component';
import { LectureItemComponent } from './lecture-item/lecture-item.component';
import { TimetableComponent } from './timetable/timetable.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WhereToGoComponent,
    LectureItemComponent,
    TimetableComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
