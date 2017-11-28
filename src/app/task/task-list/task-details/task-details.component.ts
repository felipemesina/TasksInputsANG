import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  title: string = "Task Details";
  @Input() tasks: any[];
  switch: boolean = true;

  changeColor() {
    if (this.switch === true) {
      this.switch = false
    } else if (this.switch === false) {
      this.switch = true;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
