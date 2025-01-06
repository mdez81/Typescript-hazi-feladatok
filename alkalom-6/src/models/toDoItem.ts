import { TodoContent } from "../services/todoTypes";

export class ToDoItem<T extends TodoContent>{

    constructor(public id: string, public content: T){
    }

}