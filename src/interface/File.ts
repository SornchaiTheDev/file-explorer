import { DefaultExtensionType } from 'react-file-icon/index';
export default interface FileInterface {
  type: DefaultExtensionType | 'folder';
  name: string;
  path: string;
}
