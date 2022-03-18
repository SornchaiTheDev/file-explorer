import { useAppContext } from 'Context/Context';
import FileHorizontal from './FileHorizontal';

const LeftNavbar = (): JSX.Element => {
  const { directories, recents, root } = useAppContext();
  return (
    <div className="bg-white drop-shadow-md rounded-r-lg h-full col-span-1 p-4">
      <h3 className="text-md font-semibold text-gray-900">
        Folders ({root})
      </h3>
      <div className="flex flex-col mt-2">
        {directories.map(({ name, type }) => (
          <FileHorizontal key={name} name={name} type={type} />
        ))}
      </div>
      <h3 className="text-md font-semibold text-gray-900  mt-2">Recents</h3>
      <div className="flex flex-col mt-2">
        {recents.map(({ name, type }) => (
          <FileHorizontal key={name} name={name} type={type} />
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
