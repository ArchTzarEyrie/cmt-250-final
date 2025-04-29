import { createContext } from 'react';

// Create and export a context with the default value
// of an array containing one default Task
export const TasksContext = createContext([
    {
        id: 0,
        text: 'Default Task from Context',
        dueDate: new Date(),
        isComplete: false
    }
]);