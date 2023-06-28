// import { useState } from "react";

// interface Task {
//   id: number;
//   title: string;
// }

// interface TaskSearchProps {
//   tasks: Task[];
// }

// const TaskSearch: React.FC<TaskSearchProps> = ({ tasks }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSearch = () => {
//     const filteredTasks = tasks.filter((task) =>
//       task.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredTasks(filteredTasks);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search tasks"
//         value={searchTerm}
//         onChange={handleChange}
//       />
//       <button onClick={handleSearch}>Search</button>
//       <ul>
//         {filteredTasks.map((task) => (
//           <li key={task.id}>{task.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TaskSearch; ---------------------


// import React, { useState } from "react";

// const TaskSearch = ({ tasks }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredTasks, setFilteredTasks] = useState(tasks);

//   const handleChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSearch = () => {
//     const filteredTasks = tasks.filter((task) =>
//       task.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredTasks(filteredTasks);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search tasks"
//         value={searchTerm}
//         onChange={handleChange}
//       />
//       <button onClick={handleSearch}>Search</button>
//       <ul>
//         {filteredTasks.map((task) => (
//           <li key={task.id}>{task.text}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TaskSearch;

import React, { useState } from "react";

const TaskSearch = ({ tasks }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (!tasks) return; // Handle the case when tasks is undefined or null

    const filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTasks(filteredTasks);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks"
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskSearch;
