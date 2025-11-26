'use client';

import clsx from "clsx";
import { FC, useState } from "react";
import { useTranslations } from "next-intl";
import { PlayCircleOutlined } from "@ant-design/icons";

import { Input } from "../Input";
import { Button } from "../Button";
import { useAddTask } from "@/src/api/hooks";

export const TaskStarter: FC = () => {
  const t = useTranslations();
  const [value, setValue] = useState('');

  const { mutate } = useAddTask();

  const onChangeHandler = (val: string) => {
    setValue(val);
  }

  const onClickHandler = () => {
    mutate(value);
    setValue('');
  }

  return (
    <div data-testid='task-starter-control' className={clsx('flex', 'flex-row', 'items-center')}>
      <Input value={value} onChange={onChangeHandler} placeholder={t('newTask')} />
      <Button onClick={onClickHandler}>
        <PlayCircleOutlined />
      </Button>
    </div>
  )
}
