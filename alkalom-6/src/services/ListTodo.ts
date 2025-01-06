import { ToDoItem } from "../models/toDoItem";
import { AddTodoItem } from "./AddTodo";
import { TodoContent } from "./todoTypes";

export namespace ListTodoItem{

         export function listTodoItems(): ToDoItem<TodoContent>[]{
            const todos = AddTodoItem.getTodos();
            return Array.from(todos.values()) as ToDoItem<TodoContent>[];
      }

    }