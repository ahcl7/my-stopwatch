const div = (x, y) => Math.floor(x / y);
const getMillisecond = (time) => {
  const res = time % 1000
  if (res < 10) return "00" + res;
  if (res < 100) return "0" + res;
  return "" + res;
}
const getSecond = (time) => {
  const res = div(time, 1000) % 60
  if (res < 10) return "0" + res;
  return "" + res;
}
const getMinute = (time) => {
  const res = div(time / 1000,  60) % 60
  if (res < 10) return "0" + res;
  return "" + res
}
const getHour = (time) => {
  const res = div(time / 1000 /  60, 60) % 24
  if (res < 10) return "0" + res
  return "" + res
}

module.exports = {
  getHour, getMinute, getSecond, getMillisecond
}
