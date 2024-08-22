import styles from "../../styles/task.module.scss";

import { Task } from "@/app/interfaces/task.interface";
import SingleTask from "./single-task";

export default function TaskCard() {
  const taskData = [
    {
      taskHeader: "Todo",
      tasks: [
        {
          id: 1,
          name: "Task 01",
          description: "description 01",
          createdOn: new Date(),
        },
        {
          id: 2,
          name: "Task 02",
          description: "description 02",
          createdOn: new Date(),
        },
        {
          id: 3,
          name: "Task 03",
          description: "description 03",
          createdOn: new Date(),
        },
        {
          id: 4,
          name: "Task 01",
          description: "description 01",
          createdOn: new Date(),
        },
        {
          id: 5,
          name: "Task 02",
          description: "description 02",
          createdOn: new Date(),
        },
        {
          id: 6,
          name: "Task 03",
          description: "description 03",
          createdOn: new Date(),
        },
        {
          id: 7,
          name: "Task 01",
          description: "description 01",
          createdOn: new Date(),
        },
        {
          id: 8,
          name: "Task 02",
          description: "description 02",
          createdOn: new Date(),
        },
        {
          id: 9,
          name: "Task 03",
          description: "description 03",
          createdOn: new Date(),
        },
      ],
    },
    {
      taskHeader: "Complete",
      tasks: [
        {
          id: 1,
          name: "Task 01",
          description: "description 01",
          createdOn: new Date(),
        },
        {
          id: 2,
          name: "Task 02",
          description: "description 02",
          createdOn: new Date(),
        },
        {
          id: 3,
          name: "Task 03",
          description: "description 03",
          createdOn: new Date(),
        },
      ],
    },
  ];

  return (
    <section className="flex gap-x-3">
      {!!taskData.length &&
        taskData.map((taskObj) => (
          <div
            key={taskObj.taskHeader}
            className={`${styles.task_card} w-full border-2 p-2 overflow-y-auto`}
          >
            <h4 className="py-2 px-4 font-bold bg-blue-400 text-lg">
              {taskObj.taskHeader}
            </h4>
            {!!taskObj.tasks.length &&
              taskObj.tasks.map((task: Task) => (
                <SingleTask key={task.id} task={task}></SingleTask>
              ))}
          </div>
        ))}
    </section>
  );
}
