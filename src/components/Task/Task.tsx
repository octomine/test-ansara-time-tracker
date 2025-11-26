import clsx from "clsx"
import { FC } from "react"
import { CheckCircleOutlined, PauseCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";

import { ITask } from "@/src/api/types"
import { Button } from "../Button";
import { useDoneTask, useStartTask, useStopTask } from "@/src/api/hooks";

export const Task: FC<ITask> = ({ id, name, start, end, waiting }) => {
  const { mutate: pause } = useStopTask();
  const { mutate: play } = useStartTask();
  const { mutate: done } = useDoneTask();

  const onDoneHandler = () => { done(id); }
  const onPauseHandler = () => { pause(id); }
  const onPlayHandler = () => { play(id); }

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
