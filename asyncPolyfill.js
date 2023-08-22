function asyncTask() {
  const value = Math.floor(Math.random() * 10);
  return function (callback) {
    setTimeout(() => {
      callback(value);
    }, value * 1000);
  };
}

//async parallel
function asyncParallel(taskList, resultsCallback) {
  const results = [];
  let tasksCompleted = 0;
  taskList.forEach((asyncTask) => {
    asyncTask((value) => {
      results.push(value);
      tasksCompleted++;
      if (tasksCompleted >= taskList.length) {
        resultsCallback.call(null, results);
      }
    });
  });
}

//async series
function asyncSeries(taskList, resultsCallback) {
  let results = [];
  let taskCompleted = 0;
  taskList.reduce((accum, current) => {
    return accum.then((someVal) => {
      return new Promise((resolve, reject) => {
        current((value) => {
          results.push(value);
          taskCompleted++;
          if (taskCompleted === taskList.length) {
            resultsCallback.call(null, results);
          } else {
            resolve(value);
          }
        });
      });
    });
  }, Promise.resolve());
}

const tasksArr = [
  asyncTask(),
  asyncTask(),
  asyncTask(),
  asyncTask(),
  asyncTask(),
  asyncTask(),
];

asyncSeries(tasksArr, (result) => {
  console.log('Task Completed in series - ', result);
});

asyncParallel(tasksArr, (result) => {
  console.log('Task completed', result);
});
