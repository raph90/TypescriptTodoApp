
import { Todo } from "../interfaces"

export const TODOS: Todo[] = [
    
]

export function updateTodo(id: string){
    const todoForAlteration = TODOS.find(todo => todo.id === id)
    todoForAlteration.completed = !todoForAlteration.completed
}