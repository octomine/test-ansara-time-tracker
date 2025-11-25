export interface ITask {
  id: string,
  name: string,
  start: string,
  end: string | null,
  waiting: boolean,
}
