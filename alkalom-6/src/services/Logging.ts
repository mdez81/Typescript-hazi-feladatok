import { ToDoItem } from "../models/toDoItem";
import { Log } from "../utils/myLog";
import { ToDoList } from "./toDoList";
import { TodoContent } from "./todoTypes";

export class DecoratedTodoList<T> extends ToDoList<T> {
    @Log
    override addItem(todo: ToDoItem<TodoContent>): void {
        super.addItem(todo);
    }
  
}