import { createContext } from 'react';
import { ActiveRecipeProps } from './types';

export const ActiveRecipeContext = createContext<ActiveRecipeProps>(null);
