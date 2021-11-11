import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public todoService: TodoService
  ) { }

  ngOnInit(): void {
  }

  get name() {
    return JSON.stringify(this.todoService.todos[0]);
  }
}
