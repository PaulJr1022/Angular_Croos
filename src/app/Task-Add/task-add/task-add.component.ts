import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TaskService } from '../../task.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TaskAddComponent {

  addTask:any

  constructor(private fb :FormBuilder , private taskservice:TaskService , private router:Router)
  {
  this.addTask=this.fb.group({
    title:['',[Validators.required]],
    description:[''],
    dueDate:[''],
    priority:['',[Validators.required]]
  })
  }
  task:any

  onAddTask(){
    this.task=(this.addTask.value)
    this.taskservice.createTask(this.task).subscribe(data=>{
      this.router.navigate(['/'])
    })
  }

  
}
