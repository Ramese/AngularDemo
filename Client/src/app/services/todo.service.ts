import { Injectable } from '@angular/core';
import { ToDo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos: ToDo[];
  //public myNumber: number;
  //public myString: string;

  constructor() { 

    this.todos = [];

  }
}
