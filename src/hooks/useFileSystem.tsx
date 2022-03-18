import * as fs from 'fs';
import path from 'path';
import FileInterface from '../interface/File';

const useFileSystem = () => {
  const getFolders = (currentPath: string) => {
    const dir = fs.readdirSync(currentPath);
    const folders: FileInterface[] = [];
    dir.forEach((file) => {
      const filePath = path.join(currentPath, file);
      const isDirectory = fs.statSync(filePath).isDirectory();
      if (isDirectory && file[0] !== '.')
        folders.push({ name: file, type: 'folder', path: filePath });
    });
    return { folders, path: currentPath };
  };

  const getContent = (currentPath: string) => {
    const dirContent = fs.readdirSync(currentPath);
    const files: FileInterface[] = [];

    dirContent.forEach((file) => {
      if (file !== '.localized' && file !== '.DS_Store') {
        const filePath = path.join(currentPath, file);
        const isDirectory = fs.statSync(filePath).isDirectory();
        if (!isDirectory) {
          const fileArr = file.split('.');
          const fileType = fileArr[fileArr.length - 1];
          files.push({ name: file, type: fileType, path: filePath });
        } else {
          files.push({ name: file, type: 'folder', path: filePath });
        }
      }
    });
    return { files };
  };

  return { getFolders, getContent };
};

export default useFileSystem;
