import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function MyModal(props) {
  function closeModalTask() {
    props.closeModalTask();
  }

  function getTitle() {
    return props.isEdit ? "Edit Task" : "Create Task";
  }

  function handleChangeTask(e) {
    props.onChangeTask(e.target.value)
  }

  function handleChangeProgress(e) {
    props.onChangeProgress(e.target.value)
  }

  return (
    <>
      <Transition appear show={props.isModalTaskOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalTask}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <span>{getTitle()}</span>
                  </Dialog.Title>
                  <button
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-toggle="popup-modal"
                    onClick={closeModalTask}
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <div className="mt-5 mb-10">
                    <label
                      htmlFor="task_name"
                      className="block mb-2 text-sm font-medium"
                    >
                      Task Name
                    </label>
                    <input
                      id="task_name"
                      type="text"
                      className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Type your task"
                      value={props.taskName}
                      onChange={handleChangeTask}
                    />
                    <label
                      htmlFor="progress"
                      className="block mb-2 text-sm font-medium mt-4"
                    >
                      Progress
                    </label>
                    <div className="flex flex-row">
                      <div className="basis-1/2">
                        <input
                          id="progress"
                          type="number"
                          className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                          placeholder="70%"
                          value={props.progress}
                          onChange={handleChangeProgress}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <button
                      type="button"
                      className="inline-flex shadow-inner justify-center mr-2 rounded-md border border-grey bg-white-100 px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModalTask}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-cyan-700 px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModalTask}
                    >
                      Save Task
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
