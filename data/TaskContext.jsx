import { createContext } from 'react';

export const TaskContext = createContext([
    {
        id: 0,
        text: 'Default Task from Context',
        dueDate: new Date(),
        isComplete: false
    }
]);