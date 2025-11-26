import clsx from "clsx"
import { FC } from "react"

import { ITask } from "@/src/api/types"
import { Button } from "../Button";
import { CheckCircleOutlined, PauseCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";

export const Task: FC<ITask> = ({ name, start, end, waiting }) => {
  const onDoneHandler = () => { }
  const onPauseHandler = () => { }
  const onPlayHandler = () => { }

  const rangeString = `${start}${end ? ` - ${end}` : ''}`;

  return (
    <div data-testid='task-control' className={clsx('flex', 'flex-row', 'items-center')}>
      <div className={clsx('flex', 'flex-col', 'items-left')}>
        <div>{name}</div>
        <div>{rangeString}</div>
      </div>
      {!end && (
        <div>
          {waiting ? (
            <Button onClick={onPlayHandler}>
              <PlayCircleOutlined />
            </Button>
          ) : (
            <Button onClick={onPauseHandler}>
              <PauseCircleOutlined />
            </Button>
          )}
          <Button onClick={onDoneHandler}>
            <CheckCircleOutlined />
          </Button>
        </div>
      )}
    </div>
  )
}
