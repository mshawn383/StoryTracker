
import DialogDemo from './Dialog';
import { useSelector } from 'react-redux';
import { TaskType } from '../../store/TaskSlice';

interface Tasks {
  todo: TaskType[];
  inProgress: TaskType[];
  done: TaskType[];
}


export default function DashBoard() {
  const store=useSelector((state: { task: Tasks }) =>state.task)

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
  {store[column]?.map((value) => (
    <div
      key={value.id}
      className="p-4 sm:p-6 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105"
    >
      <h1 className="text-xl font-semibold mb-2">{value.name}</h1>
      <p className="text-gray-600 mb-4">{value.summary}</p>
     
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
