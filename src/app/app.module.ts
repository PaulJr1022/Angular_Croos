import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TaskAddComponent } from './Task-Add/task-add/task-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListTaskComponent } from './List-Task/list-task/list-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskAddComponent,
    ListTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
