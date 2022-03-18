// import {folder} from 'bootstrap-icons/icons/';
function FolderBtn({ name }: { name: string }): JSX.Element {
  return (
    <div className="flex items-center space-x-2 hover:bg-gray-200 cursor-pointer rounded-lg px-4 py-2">
      <i className="bi-folder text-xl"></i>
      <h1 className="text-xl font-normal">{name}</h1>
    </div>
  );
}

export default FolderBtn;
