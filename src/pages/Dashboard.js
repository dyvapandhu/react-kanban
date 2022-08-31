import GroupCard from "../components/kanban/GroupCard";

function DashboardPage() {
  return (
    <div className="container m-2">
      <div className="grid grid-cols-4 gap-4">
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
      </div>
    </div>
  );
}

export default DashboardPage;
