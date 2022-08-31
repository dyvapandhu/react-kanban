import GroupCard from "../components/kanban/GroupCard";

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
      items: [],
    },
    {
      id: 255,
      title: "Group Task 3",
      created_by: "444",
      created_at: "2022-08-31T01:57:54.092Z",
      updated_at: "2022-08-31T01:57:54.092Z",
      description: "July - September",
      items: [],
    },
    {
      id: 256,
      title: "Group Task 4",
      created_by: "444",
      created_at: "2022-08-31T01:58:08.391Z",
      updated_at: "2022-08-31T01:58:08.391Z",
      description: "October - December",
      items: [],
    },
  ];
  return (
    <div className="container m-2">
      <div className="grid grid-cols-4 gap-4">
        {datas.map((data) => {
          return <GroupCard key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
}

export default DashboardPage;
