import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState={
    todos:[{id:1,Text:"hello world"}]
}

export const todoSlice= createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo ={
                id:nanoid(),
                Text:action.payload //payload is object
            }
            state.todos.push(todo)

        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=> todo.id!== action.payload)
        },
    }
})

export const {addTodo,removeTodo}=todoSlice.actions   //exproting functality
export  default todoSlice.reducer


//ye steps yad krlo redux tool kit ho jaega ,hona to cahiyr bhai