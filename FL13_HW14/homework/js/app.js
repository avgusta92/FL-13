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
  let studentsList = [];

  function studentsFunc() {
    let studentResult = [];

    for (let i = 0; i < students.length; i++) {
      for (let y = 0; y < studentsList[0].results.length; y++) {
        if (students[i].email === studentsList[0].results[y].email) {
          let newObj = [];

          for (let a = 0; a < studentsList.length; a++) {
            newObj.push({
              topic: studentsList[a].topic,
              success: studentsList[a].results[y].success
            });
          }

          studentResult.push({
            name: students[i].name,
            email: students[i].email,
            result: newObj
          });
        }
      }
    }

    return studentResult;
  }

  this.printStudentsList = function () {
    let studentResult = studentsFunc();

    for (let i = 0; i < studentResult.length; i++) {
      console.log(
        `name: ${studentResult[i].name}, email: ${studentResult[i].email}`
      );
      console.log(studentResult[i].result);
    }
  };

  this.addHomeworkResults = function (homeworkResults) {
    studentsList.push(homeworkResults);
  };

  this.printStudentsElitableForTest = function () {
    let studentResult = studentsFunc();

    for (let i = 0; i < studentResult.length; i++) {
      let resultFalse = 0;
      for (let y = 0; y < studentResult[i].result.length; y++) {
        if (studentResult[i].result[y].success === false) {
          resultFalse++;
        }
      }
      if (resultFalse <= failedHomeworksLimit) {
        console.log(
          `name: ${studentResult[i].name}, email: ${studentResult[i].email}`
        );
      }
    }
  };
};