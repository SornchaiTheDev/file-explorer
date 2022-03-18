import File from './File';
import { useAppContext } from 'Context/Context';

function Content(): JSX.Element {
  const { content, currentPath, goBack, goNext, historyIndex, historyLength } =
    useAppContext();
  const { name } = currentPath;

  console.log(content);

  return (
    <div className="col-span-3 p-4 h-screen overflow-scroll">
      <div className="flex space-x-2 items-center cursor-pointer w-fit">
        <i
          className={`bi bi-arrow-left text-2xl font-bold ${
            historyIndex === 0 && 'text-gray-500'
          }`}
          onClick={goBack}
        ></i>
        <i
          className={`bi bi-arrow-right text-2xl font-bold ${
            historyIndex + 1 === historyLength && 'text-gray-500'
          }
          `}
          onClick={goNext}
        ></i>
        <h1 className="text-2xl font-bold">{name}</h1>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-10">
        {content.map(({ name, type, path }) => (
          <File key={name} name={name} type={type} path={path} />
        ))}
      </div>
    </div>
  );
}

export default Content;
