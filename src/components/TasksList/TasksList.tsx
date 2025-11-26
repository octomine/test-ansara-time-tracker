import { FC } from "react";
import clsx from "clsx";
import { useTranslations } from "next-intl";

import { useGetTasks } from "@/src/api/hooks";
import { ITask } from "@/src/api/types";
import { Task } from "../Task";
import { Button } from "../Button";
import { PlusCircleOutlined } from "@ant-design/icons";

const renderTasks = (tasks: ITask[]) => tasks.map((task) => <Task key={task.id} {...task} />)

export const TasksList: FC = () => {
  const t = useTranslations();
  const hook = useGetTasks();

  // TODO: разобраться, почему иначе не работает
  console.log(hook);
  const { data } = hook;
  // console.log(data);

  const addDoneTaskHandler = () => { }

  const activeTasks = data?.filter((task) => !task.end && !task.waiting) || [];
  const pausedTasks = data?.filter((task) => !task.end && task.waiting) || [];
  const doneTasks = data?.filter((task) => task.end) || [];

  const noTasks = activeTasks.length === 0 && pausedTasks.length === 0;

  return (
    <div className={clsx('flex', 'flex-col', 'items-left')}>
      {noTasks ? t('noTasks') : (<>
        <div>{renderTasks(activeTasks)}</div>
        <div>{renderTasks(pausedTasks)}</div>
      </>)}
      <div className={clsx('flex', 'flex-row', 'items-center')}>
        <div>{t('doneTasks')}</div>
        <Button onClick={addDoneTaskHandler}>
          <PlusCircleOutlined />
        </Button>
      </div>
      {doneTasks.length === 0 ? t('noDoneTasks') : renderTasks(doneTasks)}
    </div>
  )
}
