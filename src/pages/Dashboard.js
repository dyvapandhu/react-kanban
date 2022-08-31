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
    },
    {
      id: 254,
      title: "Group Task 2",
      created_by: "444",
      created_at: "2022-08-31T01:57:17.123Z",
      updated_at: "2022-08-31T01:57:17.123Z",
      description: "April - June",
    },
    {
      id: 255,
      title: "Group Task 3",
      created_by: "444",
      created_at: "2022-08-31T01:57:54.092Z",
      updated_at: "2022-08-31T01:57:54.092Z",
      description: "July - September",
    },
    {
      id: 256,
      title: "Group Task 4",
      created_by: "444",
      created_at: "2022-08-31T01:58:08.391Z",
      updated_at: "2022-08-31T01:58:08.391Z",
      description: "October - December",
    },
  ];
  return (
    <div className="container m-2">
      <div className="grid grid-cols-4 gap-4">
        {datas.map((data) => {
          return<GroupCard key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
}

export default DashboardPage;
