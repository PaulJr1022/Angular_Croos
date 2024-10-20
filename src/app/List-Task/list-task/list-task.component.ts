import { Component } from '@angular/core';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListTaskComponent {
title='TaskManager';

tasks:any[]=[]

constructor(private taskService:TaskService){

}

}
