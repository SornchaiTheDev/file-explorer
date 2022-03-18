import File from './File';

function Content(): JSX.Element {
  return (
    <div className="col-span-3 p-4">
      <div className="flex space-x-2 items-center cursor-pointer w-fit">
        <i className="bi bi-arrow-left text-2xl font-bold"></i>
        <h1 className="text-2xl font-bold">Desktop</h1>
        <p>(../imdev)</p>
      </div>
      <div className="flex flex-wrap gap-6 mt-10">
        <File name="test" type="folder" />
        <File name="binomial.js" type="js" />
        <File name="index.html" type="html" />
      </div>
    </div>
  );
}

export default Content;
