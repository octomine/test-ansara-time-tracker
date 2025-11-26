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
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => {
      console.log('STOP!!1');
      tasksMock = tasksMock.map((task) => {
        const { id: taskId, waiting } = task
        console.log(id === taskId);
        return { ...task, waiting: id === taskId ? true : waiting }
      });
      console.log(tasksMock);
      return Promise.resolve();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getTasks'] })
    },
  });
}

export const useStartTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => {
      tasksMock = tasksMock.map((task) => {
        const { id: taskId, waiting } = task
        return { ...task, waiting: id === taskId ? false : waiting }
      });
      return Promise.resolve();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getTasks'] })
    },
  });
}
