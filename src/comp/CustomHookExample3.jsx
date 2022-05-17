import useLocaleStorage from '../hooks/useLocaleStorage';

function CustomHookExample3() {
  const [task, setTask] = useLocaleStorage('task', '');
  const [tasks, setTasks] = useLocaleStorage('tasks', []);
  console.log(task);

  const onSubmit = (e) => {
    e.preventDefault();

    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, taskObj]);
  };

  return (
    <>
      <div className='mb-3'>
        <form className='w-50' onSubmit={onSubmit}>
          <label htmlFor='task'>Task</label>
          <input
            className='fomr-control'
            type='text'
            name='task'
            id='task'
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <br />
          <button type='submit' className='btn btn-primary mt-4'>
            Submit
          </button>
        </form>
      </div>

      <hr />
      {tasks.map((task) => (
        <h3 key={task.date}>{task.task}</h3>
      ))}
    </>
  );
}
export default CustomHookExample3;
