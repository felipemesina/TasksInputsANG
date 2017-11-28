import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  title: string = "Task List";
tasks: any[] = [
  { title: 'first task' },
  { title: 'second task' },
  { title: 'third task' }
];

  constructor() { }

  ngOnInit() {
  }

}
