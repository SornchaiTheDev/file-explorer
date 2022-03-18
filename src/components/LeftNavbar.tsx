import { useAppContext } from 'Context/Context';
import FolderBtn from './FolderBtn';

const LeftNavbar = (): JSX.Element => {
  const { Folders } = useAppContext();
  return (
    <div className="bg-white drop-shadow-md rounded-r-lg h-full col-span-1 p-4">
      <h3 className="text-md font-semibold text-gray-900">Folders</h3>
      <div className="flex flex-col mt-2">
        {Folders.map(({ name }) => (
          <FolderBtn name={name} />
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
