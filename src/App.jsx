import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([])
  const handleAddTask = (e) => {
    e.preventDefault()
    // tasks.push(e.target.task.value)
    const task = {
      desc: e.target.task.value,
      completed: false
    }
    setTasks([...tasks, task])
    e.target.task.value = ''
  }
  const updateComplete = (index) => {
    tasks[index].completed = true
    setTasks([...tasks])
  }

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
  return (
    <div className='w-full bg-[#0d0d0d] min-h-screen'>
      <div className='max-w-[1440px] py-20 mx-auto px-5 md:px-12 xl:px-20'>
        <div className='flex justify-center'>
          <form onSubmit={handleAddTask} className=' bg-violet-600 w-max p-10 rounded-xl '>
            <p className='text-white text-3xl mb-4'>Add Task :</p>
            {/* <textarea rows={5} type="text" id='task' className='px-3 py-4 w-full sm:w-[500px] lg:w-[800px]' /> */}
            <input
          type="text"
          id='task' className='px-3 py-4 w-full sm:w-[500px] lg:w-[800px]'
          placeholder="Enter a new task"
        />
            <div className='flex justify-center mt-5'>
              <button type='submit' className='text-violet-600 font-bold text-xl bg-white px-5 py-2.5 rounded-lg'>Add Task</button>
            </div>
          </form>
        </div>
        <div>
          <div className='max-w-[900px] mx-auto px-5 mt-5'>
            <p className='text-white text-3xl my-4'>Tasks :</p>
            <div className='flex flex-col gap-2'>
              {
                tasks?.map((item, index) =>
                  <div className='bg-violet-600 p-5 rounded-lg relative'>
                  <button onClick={() => updateComplete(index)} className='absolute right-5 top-5'><svg xmlns="http://www.w3.org/2000/svg" fill={item.completed ? '#198745' : '#FA113D'} viewBox="0 0 24 24" strokeWidth="1.5" stroke={'#ffffff'} className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </button>
                    <p className='text-white text-lg'>{item.desc}</p> 

                <ul className='text-center'>
                        {tasks.map((task, index) => (
                          <li key={index}>
                            <span
                              style={{
                                textDecoration: task.completed ? 'line-through' : 'none',
                              }}
                            >
                              {task.description}
                            </span>
                            <button onClick={() => handleToggleComplete(index)} className='text-white p-10'>
                              {task.completed ? 'Unmark' : 'Mark'} as Complete
                            </button>
                            <button onClick={() => handleRemoveTask(index)} className='text-white'>Delete</button>
                          </li>
                        ))}
                      </ul>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
