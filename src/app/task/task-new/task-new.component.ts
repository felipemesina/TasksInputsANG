import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {
  title: string = "Task New";
  constructor() { }

  ngOnInit() {
  }

}
