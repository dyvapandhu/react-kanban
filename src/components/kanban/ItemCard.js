import ItemAction from "./ItemAction";
function ItemCard() {
  function handleMoveRight() {
    console.log("handleMoveRight");
  }
  function handleMoveLeft() {
    console.log("handleMoveLeft");
  }
  function handleEdit() {
    console.log("handleEdit");
  }
  function handleDelete() {
    console.log("handleDelete");
  }
  return (
    <div className="mt-3 block p-3 max-w-sm bg-white rounded-md border border-gray-200 hover:bg-blue-100 ">
      <p className="font-semibold">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <hr className="mt-1 mb-2" />
      <div className="flex flex-row">
        <div className="basis-3/4">
          <div className="mb-4 w-full h-3 bg-gray-200 rounded-full">
            <div
              className="h-3 bg-blue-600 rounded-full dark:bg-blue-500"
              style={{ width: `${75}%` }}
            ></div>
          </div>
        </div>
        <div className="basis-1/4">
          <p className="ml-2 mr-2 text-xs text-gray-500">75%</p>
        </div>
        <div className="basis-1/4 text-right">
          <ItemAction
            handleMoveRight={handleMoveRight}
            handleMoveLeft={handleMoveLeft}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
