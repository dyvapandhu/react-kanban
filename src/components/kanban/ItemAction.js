import { Menu, Transition } from "@headlessui/react";

function ItemAction(props) {
  return (
    <Menu>
      {({ open }) => (
        <>
          <span className="rounded-md shadow-sm">
            <Menu.Button className="focus:ring-4 focus:outline-none font-medium text-sm inline-flex">
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
            </Menu.Button>
          </span>
          <Transition
            show={open}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
            >
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active ? "text-green-500" : "text-gray-700"
                      } flex justify-left w-full px-4 py-2 text-sm leading-5 text-left`}
                      onClick={props.handleMoveRight}
                    >
                      <svg
                        className="w-5 h-5 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                      <p>Move Right</p>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active ? "text-green-500" : "text-gray-700"
                      } flex justify-left w-full px-4 py-2 text-sm leading-5 text-left`}
                      onClick={props.handleMoveLeft}
                    >
                      <svg
                        className="w-5 h-5 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        ></path>
                      </svg>
                      <p>Move Left</p>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active ? "text-green-500" : "text-gray-700"
                      } flex justify-left w-full px-4 py-2 text-sm leading-5 text-left`}
                      onClick={props.handleEdit}
                    >
                      <svg
                        className="w-5 h-5 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        ></path>
                      </svg>
                      <p>Edit</p>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active ? "text-red-500" : "text-gray-700"
                      } flex justify-left w-full px-4 py-2 text-sm leading-5 text-left`}
                      onClick={props.handleDelete}
                    >
                      <svg
                        className="w-5 h-5 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                      <p>Delete</p>
                    </div>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}

export default ItemAction;
