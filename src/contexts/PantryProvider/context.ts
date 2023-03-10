import { createContext } from 'react';
import { PantryProps } from './types';

export const PantryContext = createContext<PantryProps>(null);
