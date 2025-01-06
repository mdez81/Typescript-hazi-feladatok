import { ToDoItem } from "../models/toDoItem";
import { AddTodoItem } from "./AddTodo";
import { TodoContent } from "./todoTypes";


export namespace FilterTodos {

    export function filterTodoItemsBy<T>(predicate: (todo: ToDoItem<TodoContent>) => boolean): ToDoItem<TodoContent>[] {
        const todos = AddTodoItem.getTodos();
        return Array.from(todos.values()).filter(predicate) as ToDoItem<TodoContent>[];
    }
}