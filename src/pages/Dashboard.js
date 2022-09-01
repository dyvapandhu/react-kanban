import GroupCard from "../components/kanban/GroupCard";
import { useState } from "react";
import DeleteModal from "../components/kanban/DeleteModal";
import TaskModal from "../components/kanban/TaskModal";

function DashboardPage() {
  const datas = [
    {
      id: 253,
      title: "Group Task 1",
      created_by: "444",
      created_at: "2022-08-31T01:56:48.731Z",
      updated_at: "2022-08-31T01:56:48.731Z",
      description: "January - March",
      items: [
        {
          id: 1781,
          name: "Re-designed the zero-g doggie bags. No more spills!",
          done: null,
          todo_id: 253,
          created_at: "2022-08-31T02:25:21.893Z",
          updated_at: "2022-08-31T02:25:21.893Z",
          progress_percentage: 0.0,
        },
        {
          id: 1782,
          name: "Bundle interplanetary analytics for improved transmission",
          done: null,
          todo_id: 253,
          created_at: "2022-08-31T02:26:15.719Z",
          updated_at: "2022-08-31T02:26:15.719Z",
          progress_percentage: 30.0,
        },
        {
          id: 1856,
          name: "Improve performance BE",
          done: null,
          todo_id: 253,
          created_at: "2022-08-31T11:36:59.646Z",
          updated_at: "2022-08-31T11:36:59.646Z",
          progress_percentage: 100.0,
        },
      ],
    },
    {
      id: 254,
      title: "Group Task 2",
      created_by: "444",
      created_at: "2022-08-31T01:57:17.123Z",
      updated_at: "2022-08-31T01:57:17.123Z",
      description: "April - June",
      items: [
        {
          id: 1944,
          name: "Bundle interplanetary analytics for improved transmission",
          done: null,
          todo_id: 254,
          created_at: "2022-09-01T17:38:30.070Z",
          updated_at: "2022-09-01T17:38:30.070Z",
          progress_percentage: 30.0,
        },
      ],
    },
    {
      id: 255,
      title: "Group Task 3",
      created_by: "444",
      created_at: "2022-08-31T01:57:54.092Z",
      updated_at: "2022-08-31T01:57:54.092Z",
      description: "July - September",
      items: [
        {
          id: 1945,
          name: "Data Migration: Performance & Culture End Game",
          done: null,
          todo_id: 255,
          created_at: "2022-09-01T17:39:09.234Z",
          updated_at: "2022-09-01T17:39:09.234Z",
          progress_percentage: 60.0,
        },
      ],
    },
    {
      id: 256,
      title: "Group Task 4",
      created_by: "444",
      created_at: "2022-08-31T01:58:08.391Z",
      updated_at: "2022-08-31T01:58:08.391Z",
      description: "October - December",
      items: [
        {
          id: 1946,
          name: "Bundle interplanetary analytics for improved transmission",
          done: null,
          todo_id: 256,
          created_at: "2022-09-01T17:39:42.264Z",
          updated_at: "2022-09-01T17:39:42.264Z",
          progress_percentage: 20.0,
        },
      ],
    },
  ];

  let [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  let [isModalTaskOpen, setIsModalTaskOpen] = useState(false);
  let [isEdit, setIsEdit] = useState(false);
  let [taskName, setTaskName] = useState(false);
  let [progress, setProgress] = useState(false);

  function closeModalDelete() {
    setIsModalDeleteOpen(false);
  }

  function openModalDelete() {
    setIsModalDeleteOpen(true);
  }

  function closeModalTask() {
    setIsModalTaskOpen(false);
  }

  function openModalTask(val) {
    setIsEdit(val);
    setIsModalTaskOpen(true);
  }

  function setTaskValue(val) {
    setTaskName(val);
  }

  function setProgressValue(val) {
    setProgress(val);
  }

  return (
    <div className="container m-2">
      <div className="grid grid-cols-4 gap-4">
        {datas.map((data, index) => {
          return (
            <GroupCard
              key={data.id}
              data={data}
              order={index + 1}
              totalGroup={datas.length}
              openModalDelete={openModalDelete}
              openModalTask={openModalTask}
              isModalDeleteOpen={isModalDeleteOpen}
              isModalTaskOpen={isModalTaskOpen}
              setTaskName={setTaskName}
              setProgress={setProgress}
            />
          );
        })}
      </div>
      <DeleteModal
        isModalDeleteOpen={isModalDeleteOpen}
        closeModalDelete={closeModalDelete}
      />
      <TaskModal
        taskName={taskName}
        progress={progress}
        onChangeTask={setTaskValue}
        onChangeProgress={setProgressValue}
        isEdit={isEdit}
        isModalTaskOpen={isModalTaskOpen}
        closeModalTask={closeModalTask}
      />
    </div>
  );
}

export default DashboardPage;
