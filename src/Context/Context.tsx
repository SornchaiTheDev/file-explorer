import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from 'react';
import File from '../interface/File';
import useFileSystem from '../hooks/useFileSystem';
import os from 'os';

type CurrentDir = { name: string; path: string };
interface ContextInterface {
  root: string;
  directories: File[];
  recents: File[];
  content: File[];
  addRecentFile: (file: File) => void;
  currentPath: CurrentDir;
  setCurrentPath: React.Dispatch<React.SetStateAction<CurrentDir>>;
  setHistory: React.Dispatch<React.SetStateAction<CurrentDir[]>>;
  goBack: () => void;
  goNext: () => void;
  historyLength: number;
  historyIndex: number;
  setHistoryIndex: React.Dispatch<React.SetStateAction<number>>;
}

interface Props {
  children: ReactNode;
}

export const CTX = createContext<ContextInterface>({
  root: '/Users/imdev',
  directories: [],
  recents: [],
  content: [],
  addRecentFile: () => {},
  currentPath: { name: 'Home', path: '/Users/imdev' },
  setCurrentPath: () => {},
  setHistory: () => {},
  historyLength: 0,
  historyIndex: 0,
  setHistoryIndex: () => {},
  goBack: () => {},
  goNext: () => {},
});

const Context = ({ children }: Props) => {
  const root = os.homedir();
  const [recents, setRecents] = useState<File[]>([]);
  const [directories, setDirectories] = useState<File[]>([]);
  const [content, setContent] = useState<File[]>([]);
  const [history, setHistory] = useState<CurrentDir[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);
  const [currentPath, setCurrentPath] = useState<CurrentDir>({
    path: root,
    name: 'root',
  });
  useEffect(() => {
    console.log(historyIndex);
  }, [historyIndex]);

  const goBack = () => {
    if (historyIndex <= 0) return;
    const { path, name } = history[historyIndex - 1];
    setCurrentPath({ name, path });
    if (historyIndex > 0) setHistoryIndex(historyIndex - 1);
  };

  const goNext = () => {
    if (historyIndex + 1 === history.length) return;
    const { path, name } = history[historyIndex + 1];
    if (historyIndex < history.length) setHistoryIndex(historyIndex + 1);
    setCurrentPath({ name, path });
  };

  const { getFolders, getContent } = useFileSystem();

  useEffect(() => {
    const { folders, path } = getFolders(currentPath.path);
    setDirectories(folders);
    setCurrentPath({ path: path, name: 'Home' });
    setHistory((prev) => [...prev, { name: 'Home', path }]);
  }, []);

  useEffect(() => {
    const { files } = getContent(currentPath.path);
    setContent(files);
  }, [currentPath]);

  const addRecentFile = (file: File) => {
    const isExist = recents.find((recent) => recent.name === file.name);
    if (!isExist) setRecents((prev) => [...prev, file]);
  };

  const value = {
    root,
    currentPath,
    setCurrentPath,
    directories,
    recents,
    content,
    addRecentFile,
    setHistory,
    historyLength: history.length,
    historyIndex,
    setHistoryIndex,
    goBack,
    goNext,
  };

  return <CTX.Provider value={value}>{children}</CTX.Provider>;
};

export default Context;

export const useAppContext = () => useContext(CTX);
