import { queryOptions } from "@tanstack/react-query";
import { format } from "date-fns";
import { v4 } from "uuid";

import { ITask } from "./types";

const tasksMock: ITask[] = [];

export const queries = {
  addTask: (value: string) =>
    queryOptions({
      queryKey: ["addTask", value],
      queryFn: () => {
        tasksMock.push({
          id: v4(),
          name: value,
          start: format(new Date(), 'HH-mm-ss'),
          end: null,
        });
        return tasksMock;
      },
      enabled: !!value,
    })
}
