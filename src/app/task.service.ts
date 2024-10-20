import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http : HttpClient) { }

  getTasks(){
    return this.http.get<any[]>("http://localhost:5075/api/TaskItems");
  }

  createTask(task:any){
    return this.http.post("http://localhost:5075/api/TaskItems",task)
  }
}
