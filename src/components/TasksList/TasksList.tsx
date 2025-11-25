import { FC } from "react";

import { useGetTasks } from "@/src/api/hooks";

export const TasksList: FC = () => {
  const { data } = useGetTasks();
  console.log(data);
  return <div>{data?.length}</div>
}
