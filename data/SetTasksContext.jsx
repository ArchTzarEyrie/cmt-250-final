import { createContext } from 'react';

export const SetTasksContext = createContext((tasks) => console.log('Default SetTasks Context'));