import { createContext } from 'react';

export type ModeType = 'vertical' | 'horizontal' | 'inline';

export interface ContextType {
  mode: ModeType;
}

const MenuContext = createContext<ContextType>({ mode: 'inline' });

export default MenuContext;
