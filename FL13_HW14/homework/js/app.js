const Student = function (name, mail) {
  let studentName = name;
  let studentMail = mail;
  let homeworkResults = [];

  this.getName = function () {
    return studentName;
  };

  this.getEmail = function () {
    return studentMail;
  };

  this.addHomeworkResult = function (topic, success) {
    homeworkResults.push({
      topic: topic,
      success: success
    });
  };

  this.getHomeworkResult = function () {
    return homeworkResults;
  };
};

const FrontendLab = function (students, failedLimit) {
  let failedHomeworksLimit = failedLimit;
  let studentsList = students;

  this.printStudentsList = function () {
    for (let i = 0; i < studentsList.length; i++) {
      console.log(
        `name: ${studentsList[i].name}, email: ${studentsList[i].email}`
      );
      console.log(studentsList[i].result);
    }
  };

  this.addHomeworkResults = function (homeworkResults) {
    for (let i = 0; i < studentsList.length; i++) {
      for (let y = 0; y < homeworkResults.results.length; y++) {
        if (studentsList[i].email === homeworkResults.results[y].email) {
          if (!studentsList[i].hasOwnProperty(`result`)) {
            studentsList[i].result = [];
          }

          studentsList[i].result.push({
            topic: homeworkResults.topic,
            success: homeworkResults.results[y].success
          });
        }
      }
    }
  };

  this.printStudentsElitableForTest = function () {
    for (let i = 0; i < studentsList.length; i++) {
      let resultFalse = 0;
      for (let y = 0; y < studentsList[i].result.length; y++) {
        if (studentsList[i].result[y].success === false) {
          resultFalse++;
        }
      }
      if (resultFalse <= failedHomeworksLimit) {
        console.log(
          `name: ${studentsList[i].name}, email: ${studentsList[i].email}`
        );
      }
    }
  };
};
