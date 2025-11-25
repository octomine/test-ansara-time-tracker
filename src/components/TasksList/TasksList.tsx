import { FC } from "react";

import { useGetTasks } from "@/src/api/hooks";
import { Task } from "../Task";

export const TasksList: FC = () => {
  const { data } = useGetTasks();

  return (
    <div>{data && data.map((task) => <Task key={task.id} {...task} />)}</div>
  )
}
