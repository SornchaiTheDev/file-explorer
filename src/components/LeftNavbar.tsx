import FolderBtn from './FolderBtn';

const LeftNavbar = (): JSX.Element => {
  return (
    <div className="bg-white drop-shadow-md rounded-r-lg h-full col-span-1 p-4">
      <h3 className="text-md font-semibold text-gray-900">Folders</h3>
      <div className="flex flex-col mt-2">
        <FolderBtn name="Desktop" />
        <FolderBtn name="Documents" />
        <FolderBtn name="Downloads" />
      </div>
    </div>
  );
};

export default LeftNavbar;
