import { ToDoItem } from "./src/models/toDoItem";
import { TodoContent, isTextTodo, isDateTodo } from "./src/services/todoTypes";
import { AddTodoItem } from "./src/services/AddTodo";
import { ListTodoItem } from "./src/services/ListTodo";
import { FilterTodos } from "./src/services/FilterTodos";
import { RemoveTodoItem } from "./src/services/RemoveTodo";
import { DecoratedTodoList } from "./src/services/Logging";

//const todoList = new DecoratedTodoList<TodoContent>();

const todoItem1 = new ToDoItem("1", "Do the shoppng");
const todoItem2 = new ToDoItem("2", {message: "appiontment for dentist", dueDate: new Date("2025-1-20 10:00:00")});
const todoItem3 = new ToDoItem("3", {message: "appiontment for hairdresser", dueDate: new Date("2025-1-24 9:00:00")});

const todoList = new DecoratedTodoList<TodoContent>();
todoList.addItem(todoItem1);
todoList.addItem(todoItem2);
todoList.addItem(todoItem3);

AddTodoItem.addItem(todoItem1);
AddTodoItem.addItem(todoItem2);
AddTodoItem.addItem(todoItem3);

console.log("All todos: " + JSON.stringify(ListTodoItem.listTodoItems()));

console.log("text dodos: ", FilterTodos.filterTodoItemsBy(todo => isTextTodo(todo.content as TodoContent)));
console.log("date dodos: ", FilterTodos.filterTodoItemsBy(todo => isDateTodo(todo.content as TodoContent)));

RemoveTodoItem.removeItem("3");

console.log("todos after removal: ", ListTodoItem.listTodoItems());


