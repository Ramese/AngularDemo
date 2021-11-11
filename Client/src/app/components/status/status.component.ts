import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(
    public todoService: TodoService
  ) { }

  ngOnInit(): void {
  }

  get count(): number {
    return this.todoService.todos.length;
  }
}
