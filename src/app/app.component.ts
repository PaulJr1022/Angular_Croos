import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'TaskManager';

  tasks: any[]=[];

  constructor(private taskService : TaskService){

  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(data =>
       {this.tasks =data; })
  }
}
