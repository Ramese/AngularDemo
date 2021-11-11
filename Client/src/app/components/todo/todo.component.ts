import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(
    public todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todoService.todos;
  }

  get todoLocalList(): ToDo[] {
    return this.todoService.todos;
  }

  add() {
    this.todoService.todos.push(new ToDo());
  }
}


// A is parent of B
// this.$store.A = {
//   state: {
//     todos: {
//       todo:-> D
//         work-> A obj,
//         home-> B obj,
//         school-> C
//       }
//     },
//     isNetworkHappened
//   },
//   c: {
//     isTodosEmpty() {
//       return length < 1
//     }
//   }
//   action: {
//     initialize () {
//       ajax call and get the data and
//         .success((data) => {
//           this.todos = data;
//         }
//       }
//     }
//   }
//   mutation: {
//     add(state) {
//       state.todos.push(new Todo());
//     }
//   }
// }

// this.$store.add()

// root componentParent {
//   it shows whole todos
//   Will this parent component notice the data change ?
// }

// componentGrandchild {
//   it will change school data a:"banana"
// }