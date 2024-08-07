const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const twoTime = (item: number): string => {
  return item < 10 ? '0' + item.toString() : item.toString();
};
const currentTime: Date = new Date();

const currentYear = new Date().getFullYear();
const weddingDate: Date = new Date(`June 22 ${currentYear} 00:00:00`);

const updateCounter = () => {
  const currentTime: Date = new Date();
  const diff = weddingDate.getTime() - currentTime.getTime();

  if (diff <= 0) {
    clearInterval(timerInterval);
    daysElement.innerText = '00';
    hoursElement.innerText = '00';
    minutesElement.innerText = '00';
    secondsElement.innerText = '00';
    return;
  }

  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const seconds = Math.floor(diff / 1000) % 60;

  daysElement.innerText = twoTime(days);
  hoursElement.innerText = twoTime(hours);
  minutesElement.innerText = twoTime(minutes);
  secondsElement.innerText = twoTime(seconds);
};

updateCounter();

const timerInterval = setInterval(updateCounter, 1000);
