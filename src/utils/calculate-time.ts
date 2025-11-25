import { formatDistanceStrict } from "date-fns";

export const calculateTime = (start: string, end: string): string => {
  const startTime = new Date(`1970-01-01T${start}Z`);
  const endTime = new Date(`1970-01-01T${end}Z`);
  const diff = formatDistanceStrict(startTime, endTime);

  return diff;
}
