import { AddTodoItem } from "./AddTodo";

export namespace RemoveTodoItem {

    export function removeItem(id: string):boolean{

        const todos = AddTodoItem.getTodos();

        if(todos.has(id)){
            todos.delete(id);
            console.log(`Todo removed with id: ${id}`);
            return true;
        }
        console.log(`Todo not found with id: ${id}`);
        return false;
    }

}