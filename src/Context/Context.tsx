import { createContext, ReactNode, useState, useContext } from 'react';
import File from '../interface/File';

interface ContextInterface {
  Folders: File[];
}

interface Props {
  children: ReactNode;
}

export const CTX = createContext<ContextInterface>({
  Folders: [],
});

const Context = ({ children }: Props) => {
  const [folders, setFolders] = useState<File[]>([
    {
      name: 'Desktop',
      type: 'folder',
    },
    {
      name: 'Documents',
      type: 'folder',
    },
    {
      name: 'Downloads',
      type: 'folder',
    },
    {
      name: 'Yo',
      type: 'folder',
    },
    {
      name: 'Test',
      type: 'folder',
    },
  ]);

  const value = {
    Folders: folders,
  };

  return <CTX.Provider value={value}>{children}</CTX.Provider>;
};

export default Context;

export const useAppContext = () => useContext(CTX);
