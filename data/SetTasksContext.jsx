import { createContext } from 'react';

// create and export a context with a default value of 
// a function that takes one argument and returns nothing
export const SetTasksContext = createContext((tasks) => console.log('Default SetTasks Context'));