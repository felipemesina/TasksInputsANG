import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TaskService } from './task.service';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskNewComponent } from './task/task-new/task-new.component';
import { TaskDetailsComponent } from './task/task-list/task-details/task-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    TaskNewComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
