import { createContext } from 'react';
import { RecipesProps } from './types';

export const RecipesContext = createContext<RecipesProps>(null);
