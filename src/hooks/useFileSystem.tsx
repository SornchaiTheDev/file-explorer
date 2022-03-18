import * as fs from 'fs';
import path from 'path';
import FileInterface from '../interface/File';

const useFileSystem = () => {
  const getFolders = (currentPath: string) => {
    const dir = fs.readdirSync(currentPath);
    const folders: FileInterface[] = [];
    dir.forEach((file) => {
      const isDirectory = fs
        .statSync(path.join(currentPath, file))
        .isDirectory();
      if (isDirectory && file[0] !== '.')
        folders.push({ name: file, type: 'folder' });
    });
    return { folders, path: currentPath };
  };

  const getContent = (currentPath: string) => {
    const dirContent = fs.readdirSync(currentPath);
    const files: FileInterface[] = [];

    dirContent.forEach((file) => {
      if (file !== '.localized' && file !== '.DS_Store') {
        const isDirectory = fs
          .statSync(path.join(currentPath, file))
          .isDirectory();
        if (!isDirectory) {
          const fileType = file.split('.')[1];
          files.push({ name: file, type: fileType });
        } else {
          files.push({ name: file, type: 'folder' });
        }
      }
    });
    return { files };
  };

  return { getFolders, getContent };
};

export default useFileSystem;
