function ItemCard() {
  return (
    <div className="mt-3 block p-3 max-w-sm bg-white rounded-md border border-gray-200 hover:bg-gray-100 ">
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
          <button
            id="dropdownMenu"
            type="button"
            className="focus:ring-4 focus:outline-none font-medium text-sm inline-flex"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
