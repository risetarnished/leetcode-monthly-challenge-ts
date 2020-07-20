// import findOrder from 'src/public_apis';
// import findOrder from 'src/july/18-course-schedule-ii/CourseScheduleII';
import findOrder from '../../../src/july/18-course-schedule-ii/CourseScheduleII';

describe('Course Schedule II Tests', () => {
  afterEach(() => {
    expect.hasAssertions();
  });

  it('should not schedule courses when the number of courses provided is not valid', () => {
    expect(
      findOrder(-1, [
        [1, 0],
        [2, 0],
        [3, 1],
        [3, 2],
      ])
    ).toEqual([]);
  });

  it('should schedule courses', () => {
    expect(
      findOrder(4, [
        [1, 0],
        [2, 0],
        [3, 1],
        [3, 2],
      ])
    ).toEqual([0, 1, 2, 3]);

    expect(findOrder(2, [[1, 0]])).toEqual([0, 1]);
    // expect(findOrder(2, [[0, 1]])).toEqual([1, 0]);

    expect(findOrder(1, [])).toEqual([0]);
    expect(findOrder(2, [])).toEqual([0, 1]);
  });
});
