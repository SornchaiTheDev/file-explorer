import FileInterface from '../interface/File';
import { useAppContext } from 'Context/Context';
import { FileIcon, defaultStyles } from 'react-file-icon';

function File(file: FileInterface): JSX.Element {
  const { handleFileClick } = useAppContext();
  const { name, type } = file;
  return (
    <div
      className="flex flex-col space-y-3 justify-center items-center p-6 cursor-pointer"
      onClick={() => handleFileClick(file)}
    >
      {type === 'folder' ? (
        <i className="bi bi-folder text-6xl"></i>
      ) : (
        <div className="w-2/6">
          <FileIcon extension={type} {...defaultStyles[type]} />
        </div>
      )}

      <h3 className="text-center">
        {name.length > 20 ? name.slice(0, 20) + '...' : name}
      </h3>
    </div>
  );
}

export default File;
