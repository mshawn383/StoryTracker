import React, { useState } from 'react';
import DialogDemo from './Dialog';

export default function DashBoard() {
  const [tasks, setTasks] = useState({
    todo: [],
    inProgress: [],
    done: []
  });
  const [openDialog,setOpenDialog]=useState<boolean>(false)
  const handleDialog=()=>{
    setOpenDialog(false)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-10">
        <h1 className="text-center text-4xl font-bold text-blue-500">StoryTracker</h1>
      </header>
      <div className="flex justify-center mt-24">
        <div className="grid grid-cols-3 gap-8 w-full max-w-6xl">
          {['todo', 'inProgress', 'done'].map(column => (
            <div key={column} className="p-4 bg-white rounded-lg shadow-md drop-area" data-column={column}>
              <h2 className="text-2xl font-bold mb-4 capitalize flex items-center justify-between">
                {column.replace(/([A-Z])/g, ' $1')}
                {column === 'todo' && (
                   <DialogDemo />
                )}
              </h2>
              <div className="space-y-4">
                {tasks[column].map((task, index) => (
                  <div key={index} className="p-4 bg-gray-200 rounded-lg shadow-sm">
                    {task}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
  
    </div>
  );
}
