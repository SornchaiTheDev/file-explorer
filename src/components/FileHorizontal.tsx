import FileInterface from '../interface/File';
import { useAppContext } from 'Context/Context';
import path from 'path';

const getIcon = (type: string) => {
  switch (type) {
    case 'folder':
      return 'bi bi-folder';
    case 'file':
      return 'bi bi-file-earmark';
    case 'html':
      return 'bi bi-filetype-html';
    case 'js':
      return 'bi bi-filetype-js';
    case 'css':
      return 'bi bi-filetype-css';
    case 'ts':
      return 'bi bi-filetype-typescript';
    case 'json':
      return 'bi bi-filetype-json';
    case 'mp4':
      return 'bi bi-filetype-mp4';
    default:
      return 'bi bi-file-earmark';
  }
};

function FileHorizontal({ name, type }: FileInterface): JSX.Element {
  const { addRecentFile, root, setCurrentPath, setHistory, setHistoryIndex } =
    useAppContext();
  const handleFileClick = () => {
    addRecentFile({ name, type });
    setCurrentPath({ name, path: path.join(root, name) });
    setHistory((prev) => [...prev, { name, path: path.join(root, name) }]);
    setHistoryIndex((prev) => prev + 1);
  };
  return (
    <div
      className="flex space-x-3 items-center cursor-pointer"
      onClick={handleFileClick}
    >
      <i className={`${getIcon(type)} text-2xl`} />
      <h3>{name}</h3>
    </div>
  );
}

export default FileHorizontal;
