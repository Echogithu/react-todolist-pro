function _addZero(value) {
  return value < 10 ? "0" + value : value;
}

function formatDataTime(timeStamp) {
  const date = new Date(timeStamp);
  const y = date.getFullYear(),
    m = date.getMonth(),
    d = date.getDay(),
    h = _addZero(date.getHours()),
    i = _addZero(date.getMinutes()),
    s = _addZero(date.getSeconds());

  return `${y}年${m+1}月${d}日 ${h}:${i}:${s}`;
}

export { formatDataTime };
