import { Task, useTasks } from './useTasks';
import { Button } from './Button';

export interface ButtonList {
  error: boolean;
}

export const tasks = {
  tasks: [
    { id: '1', state: 'TASK_INBOX', title: 'Build a date picker' },
    { id: '2', state: 'TASK_INBOX', title: 'QA dropdown' },
    {
      id: '3',
      state: 'TASK_INBOX',
      title: 'Write a schema for account avatar component',
    },
    { id: '4', state: 'TASK_INBOX', title: 'Export logo' },
    { id: '5', state: 'TASK_INBOX', title: 'Fix bug in input error state' },
    { id: '6', state: 'TASK_INBOX', title: 'Draft monthly blog to customers' },
  ],
};

export const ButtonList = ({ error = false }: ButtonList) => {
  const [tasks] = useTasks();

  if (error) {
    return (
      <div style={{ width: '500px', height: '500px', backgroundColor: 'tomato' }}>Error!!!</div>
    );
  }
  return (
    <div title="tasks" style={{ width: '500px', height: '500px', backgroundColor: 'tomato' }}>
      {tasks &&
        (tasks as Task[]).map((task: Task) => (
          <Button key={task.id} width={100} height={100}>
            {task.title}
          </Button>
        ))}
    </div>
  );
};
