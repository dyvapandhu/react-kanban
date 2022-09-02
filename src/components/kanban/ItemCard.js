import ItemAction from "./ItemAction";
function ItemCard(props) {
  function handleMoveRight() {
    console.log("handleMoveRight");
  }
  function handleMoveLeft() {
    console.log("handleMoveLeft");
  }
  function handleEdit() {
    props.openModalTask(true)
    props.setTaskName(props.data.name)
    props.setProgress(props.data.progress_percentage)
    props.openModalTask(true)
  }
  function handleDelete() {
    props.setGroupId(props.groupId)
    props.setTaskId(props.data.id)
    props.openModalDelete()
  }
  function progressClass(value) {
    return value >= 100 ? 'h-3 bg-emerald-700 rounded-full' : 'h-3 bg-cyan-600 rounded-full'
  }
  return (
    <div className="mt-3 block p-3 max-w-sm bg-white rounded-md border border-gray-200 hover:bg-blue-100 ">
      <p className="font-semibold">{props.data.name}</p>
      <hr className="mt-1 mb-2" />
      <div className="flex flex-row">
        <div className="basis-3/4">
          <div className="mt-1 w-full h-3 bg-gray-200 rounded-full">
            <div
              className={progressClass(props.data.progress_percentage)}
              style={{ width: `${props.data.progress_percentage}%` }}
            ></div>
          </div>
        </div>
        <div className="basis-1/4">
          {props.data.progress_percentage >= 100 ? (
            <svg
              className="w-6 h-5 fill-emerald-700"
              viewBox="0 0 20 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          ) : (
            <p className="ml-2 mr-2 text-xs text-gray-500">
              {props.data.progress_percentage}%
            </p>
          )}
        </div>
        <div className="basis-1/4 text-right">
          <ItemAction
            isShowMoveRight={props.order < props.totalGroup}
            isShowMoveLeft={props.order > 1}
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
