// import React from "react";
// import TaskSearch from "../../components/TaskSearch";

// const tasks = [
//   { id: 1, title: "abc1" },
//   { id: 2, title: "bcd2" },
//   { id: 3, title: "cdf3" },
//   { id: 4, title: "def4" },
//   { id: 5, title: "efg5" },
//   // Add more tasks as needed
// ];

// const TasksPage: React.FC = () => {
//   return (
//     <div>
//       <h1>All Tasks</h1>
//       <TaskSearch tasks={tasks} />
//     </div>
//   );
// };

// export default TasksPage;


// import React from "react";
// import TaskSearch from "../../components/TaskSearch";

// let retString = localStorage.getItem("comments")
// let retArray = JSON.parse(retString)

// const tasks = [
//   { id: 1, title: "abc1" },
//   { id: 2, title: "bcd2" },
//   { id: 3, title: "cdf3" },
//   { id: 4, title: "def4" },
//   { id: 5, title: "efg5" },
//   // Add more tasks as needed
// ];

// const TasksPage = () => {
//   return (
//     <div>
//       <h1>All Tasks</h1>
//       <TaskSearch tasks={retArray} />
//     </div>
//   );
// };

// export default TasksPage;


import React from "react";
import TaskSearch from "../../components/TaskSearch";

let retArray = [];

if (typeof localStorage !== "undefined") {
  let retString = localStorage.getItem("comments");
  retArray = JSON.parse(retString);
}

const TasksPage = () => {
  return (
    <div>
      <h1>All Tasks</h1>
      <TaskSearch tasks={retArray} />
    </div>
  );
};

export default TasksPage;
