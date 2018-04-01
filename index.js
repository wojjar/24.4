const formatDate = (timeInSeconds) => {
  let hour = Math.floor(timeInSeconds / 3600);
  let min = Math.floor((timeInSeconds - hour * 3600) / 60);
  let sec = timeInSeconds % 60;

  if (timeInSeconds >= 3600 && min >= 1 && sec >= 1)
    return (`${hour}h ${min}m ${sec}s`);
  else if (timeInSeconds >= 3600 && min >= 1 && sec < 1)
    return (`${hour}h ${min}m`);
  else if (timeInSeconds >= 3600 && min < 1 && sec >= 1)
    return (`${hour}h ${sec}s`);
  else if (timeInSeconds >= 3600 && min < 1 && sec < 1)
    return (`${hour}h`);
  else if (timeInSeconds < 3600 && timeInSeconds >= 60 && sec >= 1)
    return (`${min}m ${sec}s`);
  else if (timeInSeconds < 3600 && timeInSeconds >= 60 && sec < 1)
    return (`${min}m`);
  else if (timeInSeconds < 60)
    return (`${sec}s`);
  else
    return `${0}s`;
}

module.exports = formatDate;
