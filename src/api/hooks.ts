import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { v4 } from "uuid";

import { ITask } from "./types";

let tasksMock: ITask[] = [];

export const useGetTasks = () => {
  return useQuery({
    queryKey: ["getTasks"],
    queryFn: () => tasksMock,
  })
}

export const useAddTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (name: string) => {
      tasksMock.push({
        id: v4(),
        name,
        start: format(new Date(), 'HH:mm:ss'),
        end: null,
        waiting: false,
      });
      return Promise.resolve();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getTasks'] })
    },
  });
}

export const useStopTask = () => {
  return useMutation({
    mutationFn: (id: string) => {
      tasksMock = tasksMock.map((task) => {
        const { id: taskId } = task
        return { ...task, waiting: id === taskId }
      });
      return Promise.resolve();
    }
  });
}
