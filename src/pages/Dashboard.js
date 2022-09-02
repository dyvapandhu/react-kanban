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
  let [groupId, setGroupId] = useState(null);
  let [taskId, setTaskId] = useState(null);
  let [order, setOrder] = useState(null);

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

  async function createTask() {
    const url = process.env.REACT_APP_API_URL;
    const defaultOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.REACT_APP_TOKEN,
      },
      body: JSON.stringify({
        name: taskName,
        progress_percentage: parseInt(progress),
      }),
    };
    await fetch(url + `/todos/${groupId}/items`, defaultOptions)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const temp = todos.map((group) => {
          if (group.id === data.todo_id) {
            group.items.push(data);
          }
          return group;
        });
        setTodos(temp);
        setIsModalTaskOpen(false);
      });
  }

  async function editTask() {
    const url = process.env.REACT_APP_API_URL;
    const defaultOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.REACT_APP_TOKEN,
      },
      body: JSON.stringify({
        target_todo_id: groupId,
        name: taskName,
        progress_percentage: parseInt(progress),
      }),
    };
    await fetch(url + `/todos/${groupId}/items/${taskId}`, defaultOptions)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const temp = todos.map((group) => {
          if (group.id === data.todo_id) {
            group.items = group.items.map((item) => {
              if (item.id === data.id) {
                item = data;
              }
              return item;
            });
          }
          return group;
        });
        setTodos(temp);
        setIsModalTaskOpen(false);
      });
  }

  async function move(type, order, task) {
    let group = null;
    if (type === "right") {
      group = todos[order];
    }
    if (type === "left") {
      group = todos[order - 2];
    }
    const url = process.env.REACT_APP_API_URL;
    const defaultOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.REACT_APP_TOKEN,
      },
      body: JSON.stringify({
        target_todo_id: group.id,
      }),
    };
    await fetch(url + `/todos/${task.todo_id}/items/${task.id}`, defaultOptions)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const tempTodos = todos.map((group, index) => {
          if (
            (type === "right" && index === order) ||
            (type === "left" && index === order - 2)
          ) {
            group.items.push(data);
          }
          if (
            (type === "right" && index === order - 1) ||
            (type === "left" && index === order - 1)
          ) {
            group.items = group.items.filter((item) => item.id !== task.id);
          }
          return group;
        });
        setTodos(tempTodos);
      });
  }

  async function deleteTask() {
    const url = process.env.REACT_APP_API_URL;
    const defaultOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.REACT_APP_TOKEN,
      },
    };
    await fetch(url + `/todos/${groupId}/items/${taskId}`, defaultOptions).then(
      (res) => {
        if (res.status === 204) {
          const temp = todos.map((group) => {
            if (group.id === groupId) {
              group.items = group.items.filter((item) => item.id !== taskId);
            }
            return group;
          });
          setTodos(temp);
          setIsModalDeleteOpen(false);
        }
      }
    );
  }

  return (
    <div className="container m-2">
      Order: {order}
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
              setGroupId={setGroupId}
              setTaskId={setTaskId}
              setOrder={setOrder}
              move={move}
            />
          );
        })}
      </div>
      <DeleteModal
        deleteTask={deleteTask}
        isModalDeleteOpen={isModalDeleteOpen}
        closeModalDelete={closeModalDelete}
      />
      <TaskModal
        groupId={groupId}
        taskId={taskId}
        taskName={taskName}
        progress={progress}
        onChangeTask={setTaskValue}
        onChangeProgress={setProgressValue}
        isEdit={isEdit}
        isModalTaskOpen={isModalTaskOpen}
        closeModalTask={closeModalTask}
        createTask={createTask}
        editTask={editTask}
      />
    </div>
  );
}

export default DashboardPage;
