const users = [
  { name: "Alice", courses: ["Math", "Science", "English"] },
  { name: "Bob", courses: ["Math", "Art"] },
  { name: "Charlie", courses: ["Science", "Math", "History"] },
  { name: "David", courses: ["Math", "English"] },
  { name: "Eve", courses: ["Art", "Science"] }
];

// object to store course counts
let courseCount = {};

// 1. count students in each course
for (let i = 0; i < users.length; i++) {
  let courses = users[i].courses;

  for (let j = 0; j < courses.length; j++) {
    let course = courses[j];

    if (courseCount[course]) {
      courseCount[course]++;
    } else {
      courseCount[course] = 1;
    }
  }
}

// 2. display each course with count
for (let course in courseCount) {
  console.log(course + ": " + courseCount[course] + " students");
}

// 3. find most popular course
let maxCourse = "";
let maxCount = 0;

for (let course in courseCount) {
  if (courseCount[course] > maxCount) {
    maxCount = courseCount[course];
    maxCourse = course;
  }
}

console.log("Most popular course: " + maxCourse + " with " + maxCount + " students");