import clsx from "clsx"
import { FC } from "react"

import { ITask } from "@/src/api/types"

export const Task: FC<ITask> = ({ name, start, end, waiting }) => {
  const rangeString = `${start}${end ? ` - ${end}` : ''}`;

  return (
    <div data-testid='task-control' className={clsx('flex', 'flex-row', 'items-center')}>
      <div className={clsx('flex', 'flex-col', 'items-left')}>
        <div>{name}</div>
        <div>{rangeString}</div>
      </div>
    </div>
  )
}
