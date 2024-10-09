import { useState } from 'react';
import DialogDemo from './Dialog';

interface Tasks {
  todo: TaskType[];
  inProgress: TaskType[];
  done: TaskType[];
}

interface TaskType {
  id: number;
  name: string;
}

export default function DashBoard() {
  const [tasks] = useState<Tasks>({
    todo: [],
    inProgress: [],
    done: []
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <header className="fixed top-0 left-0 w-full bg-white shadow-md p-2 sm:p-4 z-10">
        <h1 className="text-center text-2xl sm:text-4xl font-bold text-blue-500">StoryTracker</h1>
      </header>
      <div className="flex justify-center mt-20 sm:mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 w-full max-w-6xl">
          {(['todo', 'inProgress', 'done'] as Array<keyof Tasks>).map(column => (
            <div key={column} className="p-2 sm:p-4 bg-white rounded-lg shadow-md drop-area" data-column={column}>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 capitalize flex items-center justify-between">
                {column.replace(/([A-Z])/g, ' $1')}
                {column === 'todo' && (
                  <DialogDemo />
                )}
              </h2>
              <div className="space-y-2 sm:space-y-4">
                {tasks[column].map((value) => (
                  <div key={value.id} className="p-2 sm:p-4 bg-gray-200 rounded-lg shadow-sm">
                    {value.name}
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
