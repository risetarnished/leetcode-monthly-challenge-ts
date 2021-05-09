// https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/546/week-3-july-15th-july-21st/3394/

const isEveryPrerequisiteCleared = (
  prerequisitesMap: Map<number, number[]>,
  currentCourseNumber: number,
  coursesTaken: Set<number>
): boolean => {
  const prerequisites: number[] | undefined = prerequisitesMap.get(
    currentCourseNumber
  );
  return (
    Array.isArray(prerequisites) &&
    prerequisites &&
    prerequisites.every((course) => coursesTaken.has(course))
  );
};

const scheduleCourses = (
  numCourses: number,
  currentCourseNumber: number,
  prerequisitesMap: Map<number, number[]>,
  coursesTaken: Set<number>,
  courseSchedule: number[]
): void => {
  if (currentCourseNumber === numCourses) {
    return;
  }
  const currentPrerequisites: number[] | undefined = prerequisitesMap.get(
    currentCourseNumber
  );
  /* istanbul ignore else */
  if (
    !currentPrerequisites ||
    isEveryPrerequisiteCleared(
      prerequisitesMap,
      currentCourseNumber,
      coursesTaken
    )
  ) {
    coursesTaken.add(currentCourseNumber);
    courseSchedule.push(currentCourseNumber);
    scheduleCourses(
      numCourses,
      currentCourseNumber + 1,
      prerequisitesMap,
      coursesTaken,
      courseSchedule
    );
  } else {
    scheduleCourses(
      numCourses,
      currentCourseNumber + 1,
      prerequisitesMap,
      coursesTaken,
      courseSchedule
    );
  }
};

export const findOrder = (
  numCourses: number,
  prerequisites: number[][]
): number[] => {
  if (numCourses <= 0 || !Array.isArray(prerequisites)) {
    return [];
  }
  const prerequisitesMap = new Map<number, number[]>();
  prerequisites.forEach((coursePair) => {
    const currentPrerequisites: number[] | undefined = prerequisitesMap.get(
      coursePair[0]
    );
    if (!currentPrerequisites) {
      prerequisitesMap.set(coursePair[0], [coursePair[1]]);
    } else {
      currentPrerequisites.push(coursePair[1]);
    }
  });
  const courseSchedule: number[] = [];
  scheduleCourses(
    numCourses,
    0,
    prerequisitesMap,
    new Set<number>(),
    courseSchedule
  );
  return courseSchedule;
};

export default findOrder;
