import { createContext } from 'react';
import { AppContextProps } from '../../types/AppContextProps';

const AppContext = createContext<AppContextProps | undefined>(undefined);

export default AppContext;
