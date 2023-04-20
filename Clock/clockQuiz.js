let dateComponent = document.getElementById("date");
let timeComponent = document.getElementById("time");

const getNowTime = () => {
  const nowDate = new Date();
  const year = nowDate.getFullYear();
  const month = nowDate.getMonth();
  const date = nowDate.getDate();
  const hour = nowDate.getHours();
  const minute = nowDate.getMinutes();
  const second = nowDate.getSeconds();

  if (hour < 12) {
    time.innerHTML = "AM ";
  }

  if (hour >= 12) {
    time.innerHTML = "PM ";
  }

  dateComponent.innerText = `${year}년 ${month}월 ${date}일`;
  timeComponent.innerText += `${hour}시 ${minute}분 ${second}초`;
};

const init = () => {
  setInterval(getNowTime, 1000);
};

init();
