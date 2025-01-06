import { ToDoItem } from "../models/toDoItem";
import { TodoContent } from "./todoTypes";

export class ToDoList<T>{

    private todos: Map<string, ToDoItem<TodoContent>> = new Map();

    addItem(todo: ToDoItem<TodoContent>): void {
        this.todos.set(todo.id, todo);
        console.log(`Todo added: ${JSON.stringify(todo)}`);
    }

    /*removeItem(id: string):boolean{
        if(this.todos.has(id)){
            this.todos.delete(id);
            console.log(`Todo removed with id: ${id}`);
            return true;
        }
        return false;
    }

    listTodoItems(): ToDoItem<T>[]{
          const todos: ToDoItem<T>[] = [];
          for (const todo of this.todos.values()) {
            todos.push(todo);
          }
          console.log("All todos: " + JSON.stringify(todos));
          return todos;
    }

          listTodoItems(): ToDoItem<TodoContent>[]{
            const todos = Array.from(this.todos.values());
            console.log("All todos: " + JSON.stringify(todos));
            return todos;
      }

    filterTodoItemsBy(predicate: (todo: ToDoItem<TodoContent>) => boolean): ToDoItem<TodoContent>[] {
        return this.listTodoItems().filter(predicate);
    }*/

    
}