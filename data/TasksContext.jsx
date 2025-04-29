import { createContext } from 'react';

export const TasksContext = createContext([
    {
        id: 0,
        text: 'Default Task from Context',
        dueDate: new Date(),
        isComplete: false
    }
]);