import { ToDoItem } from "../models/toDoItem";
import { TodoContent } from "./todoTypes";

    export namespace AddTodoItem {
        const todos: Map<string, ToDoItem<TodoContent>> = new Map();    
       

   export function addItem(todo: ToDoItem<TodoContent>): void {
        todos.set(todo.id, todo);
        console.log(`Todo added: ${JSON.stringify(todo)}`);
    }

    export function getTodos():  Map<string, ToDoItem<TodoContent>>{
        return todos;
    }
}








    
