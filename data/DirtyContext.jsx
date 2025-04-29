import { createContext } from 'react';

export const DirtyContext = createContext((tasks) => console.log('Default Dirty Context'));