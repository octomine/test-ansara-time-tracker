import { calculateTime } from "../calculate-time";

describe("utils", () => {
  test("calculateTime", () => {
    expect(calculateTime('00:00:00', '01:01:01')).toBe("1 ч 1 м 1 с")
  })
});
