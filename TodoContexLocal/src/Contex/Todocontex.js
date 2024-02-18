import { createContext,useContext  } from "react";
export const TodoContex=createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed: false,
        }
    ],
    addTodo:(todo)=>{},
    upadteTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleCompelte:(id)=>{}

})

export const useTodo=()=>{
    return useContext(TodoContex)

}
export const TodoProvider=TodoContex.Provider