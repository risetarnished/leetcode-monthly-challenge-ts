// https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/546/week-3-july-15th-july-21st/3394/

function prerequisitesCleared(
  map: Map<number, number[]>,
  currentCourse: number,
  coursesTaken: Set<number>
): boolean {
  const prerequisites = map.get(currentCourse);
  return (
    Array.isArray(prerequisites) &&
    prerequisites.every((course) => coursesTaken.has(course))
  );
}

function scheduleCourses(
  numCourses: number,
  currentCourse: number,
  map: Map<number, number[]>,
  coursesTaken: Set<number>,
  result: number[]
): void {
  if (currentCourse === numCourses) {
    return;
  }
  const currentPrerequisites = map.get(currentCourse);
  if (
    !currentPrerequisites ||
    prerequisitesCleared(map, currentCourse, coursesTaken)
  ) {
    coursesTaken.add(currentCourse);
    result.push(currentCourse);
    scheduleCourses(numCourses, currentCourse + 1, map, coursesTaken, result);
  } else {
    scheduleCourses(numCourses, currentCourse + 1, map, coursesTaken, result);
  }
}

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  if (numCourses <= 0 || !Array.isArray(prerequisites)) {
    return [];
  }
  const map: Map<number, number[]> = new Map<number, number[]>();
  prerequisites.forEach((coursePair) => {
    const currentPrerequisites = map.get(coursePair[0]);
    if (!currentPrerequisites) {
      map.set(coursePair[0], [coursePair[1]]);
    } else {
      currentPrerequisites.push(coursePair[1]);
    }
  });
  const result: number[] = [];
  scheduleCourses(numCourses, 0, map, new Set<number>(), result);
  return result;
}

export default findOrder;
