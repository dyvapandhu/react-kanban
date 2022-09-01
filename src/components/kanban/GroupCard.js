import ItemCard from "./ItemCard";

function GroupCard(props) {
  function handleNewTask() {
    props.setTaskName('')
    props.setProgress('')
    props.openModalTask(false)
  }
  return (
    <div className="block p-3 max-w-sm bg-emerald-50 rounded-md border border-emerald-500">
      <button
        type="button"
        disabled
        className="bg-emerald-50 border-emerald-500 py-1 px-1 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-sm border border-gray-200"
      >
        {props.data.title}
      </button>
      <p className="mt-1 mb-2">{props.data.description}</p>
      {props.data.items.map((item) => {
        return <ItemCard
          key={item.id}
          data={item}
          order={props.order}
          totalGroup={props.totalGroup}
          openModalDelete={props.openModalDelete}
          openModalTask={props.openModalTask}
          setTaskName={props.setTaskName}
          setProgress={props.setProgress}
        />;
      })}
      <button
        type="button"
        className="mt-2 focus:ring-4 focus:outline-none font-medium text-sm mt-2 inline-flex"
        onClick={handleNewTask}
      >
        <svg
          className="w-5 h-5 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>New Task</span>
      </button>
    </div>
  );
}

export default GroupCard;
