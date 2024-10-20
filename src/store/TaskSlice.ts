import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface Task {
 todo:TaskType[],
 inprogress:TaskType[],
 done:TaskType[]
}

export interface TaskType{
    id:string,
  name:string,
  summary:string
}
// Define the initial state using that type
const initialState: Task = {
    todo:[],
    inprogress:[],
    done:[]
}

export const TaskSlice = createSlice({
  name: 'task',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addTodoStory: (state,action: PayloadAction<TaskType>) => {
      state.todo.push({id:action.payload.id,name:action.payload.name,summary:action.payload.summary}) 
    },
    removeTodoStoryById:(state,action:PayloadAction<string>)=>{
      console.log(action,"Action");
      
      const result=state.todo.filter(val=>val.id !== (action.payload as string) )
      console.log(result,"Result");
      
    },
    addInProgressStory: (state,action: PayloadAction<TaskType>) => {
      const isIdPresent=state.inprogress.filter(value=>value.id === action.payload.id)
      if(isIdPresent.length==0){
        state.inprogress.push({id:action.payload.id,name:action.payload.name,summary:action.payload.summary}) 
      }
    
    },
  },
})

export const { addTodoStory,addInProgressStory,removeTodoStoryById } = TaskSlice.actions


export default TaskSlice.reducer