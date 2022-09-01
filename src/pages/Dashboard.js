import GroupCard from "../components/kanban/GroupCard";
import { useEffect, useState } from "react";
import DeleteModal from "../components/kanban/DeleteModal";
import TaskModal from "../components/kanban/TaskModal";

function DashboardPage() {
  let [todos, setTodos] = useState([]);
  let [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  let [isModalTaskOpen, setIsModalTaskOpen] = useState(false);
  let [isEdit, setIsEdit] = useState(false);
  let [taskName, setTaskName] = useState(false);
  let [progress, setProgress] = useState(false);

  useEffect(() => {
    const url = process.env.REACT_APP_API_URL;
    const defaultOptions = {
      headers: {
        Authorization: process.env.REACT_APP_TOKEN,
      },
    };
    const fetchData = async () => {
      await fetch(url + "/todos", defaultOptions)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          return Promise.all(
            data.map(async (val) => {
              const items = await fetch(
                url + `/todos/${val.id}/items`,
                defaultOptions
              );
              const todos = await items.json();
              val.items = todos;
              return val;
            })
          );
        })
        .then((data) => {
          setTodos(data);
        });
    };
    fetchData();
  }, []);

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
        {todos.map((data, index) => {
          return (
            <GroupCard
              key={data.id}
              data={data}
              order={index + 1}
              totalGroup={todos.length}
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
