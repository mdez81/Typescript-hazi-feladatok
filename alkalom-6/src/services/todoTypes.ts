
export type TextTodo = string;
export type DateTodo = {message: string, dueDate: Date};
export type TodoContent = TextTodo | DateTodo;

export function isTextTodo(content: TodoContent): content is TextTodo{
    return typeof content === "string";
}

export function isDateTodo(content: TodoContent): content is DateTodo {
    //return (content as DateTodo).dueDate !== undefined; 
    return typeof content === 'object' && 'message' in content && 'dueDate' in content;

}

