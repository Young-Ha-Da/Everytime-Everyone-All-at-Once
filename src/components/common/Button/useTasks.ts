import { useReducer, useEffect } from 'react';

export interface Task {
  id: string;
  title: string;
  state: string;
}

function getTasks(options: object) {
  return fetch('/tasks', options).then((res) => res.json());
}

function updateTask(tasks: Task[], id: string, updatedTask: object): Task[] {
  return tasks.map((task: Task) => (task.id === id ? { ...task, ...updatedTask } : task));
}

function deleteTask(tasks: Task[], id: string): Task[] {
  return tasks.filter((task: Task) => task.id !== id);
}

interface Actions {
  type: string;
  id?: string;
  title?: string;
  tasks: Task[];
}

export const reducer = (tasks: Task[], action: Actions): Task[] => {
  switch (action.type) {
    case 'UPDATE_TASKS':
      return action.tasks;
    case 'ARCHIVE_TASK':
      return updateTask(tasks, action.id as string, { state: 'TASK_ARCHIVED' });
    case 'PIN_TASK':
      return updateTask(tasks, action.id as string, { state: 'TASK_PINNED' });
    case 'INBOX_TASK':
      return updateTask(tasks, action.id as string, { state: 'TASK_INBOX' });
    case 'DELETE_TASK':
      return deleteTask(tasks, action.id as string);
    case 'EDIT_TITLE':
      return updateTask(tasks, action.id as string, { title: action.title });
    default:
      return tasks;
  }
};

export function useTasks() {
  const [tasks, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    getTasks({ signal })
      .then(({ tasks }) => {
        dispatch({ type: 'UPDATE_TASKS', tasks });
      })
      .catch((error) => {
        if (!abortController.signal.aborted) {
          console.log(error);
        }
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return [tasks, dispatch];
}
