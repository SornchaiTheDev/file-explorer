import FileInterface from '../interface/File';

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

function File({ name, type }: FileInterface): JSX.Element {
  return (
    <div className="flex flex-col space-y-3 items-center p-6 cursor-pointer">
      <i className={`${getIcon(type)} text-5xl`} />
      <h3>{name}</h3>
    </div>
  );
}

export default File;
