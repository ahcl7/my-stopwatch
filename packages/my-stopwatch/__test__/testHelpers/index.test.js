const { getHour, getMinute, getSecond, getMillisecond } = require('./../../helpers/utils')

test("getMillisecond should return result of length 3", () => {
  expect(getMillisecond(0).length).toBe(3)
  expect(getMillisecond(10).length).toBe(3)
  expect(getMillisecond(123).length).toBe(3)
  expect(getMillisecond(12344).length).toBe(3)
})

test("getMillisecond should return correct value", () => {
  expect(getMillisecond(0)).toBe("000")
  expect(getMillisecond(10)).toBe("010")
  expect(getMillisecond(123)).toBe("123")
  expect(getMillisecond(12344)).toBe("344")
})
test("getSecond should return result of length 2", () => {
  expect(getSecond(2000).length).toBe(2)
  expect(getSecond(43300).length).toBe(2)
  expect(getSecond(75123).length).toBe(2)
  expect(getSecond(66342).length).toBe(2)
})

test("getSecond should return correct value", () => {
  expect(getSecond(2000)).toBe("02")
  expect(getSecond(43300)).toBe("43")
  expect(getSecond(75123)).toBe("15")
  expect(getSecond(66342)).toBe("06")
})

test("getMinute should return result of length 2", () => {
  expect(getMinute(6 * 60 * 1000 + 123).length).toBe(2)
  expect(getMinute(60 * 60 * 1000 + 123).length).toBe(2)
  expect(getMinute(15 * 60 * 1000 + 123).length).toBe(2)
  expect(getMinute( 234).length).toBe(2)
})

test("getMinute should return correct value", () => {
  expect(getMinute(6 * 60 * 1000 + 123)).toBe("06")
  expect(getMinute(60 * 60 * 1000 + 123)).toBe("00")
  expect(getMinute(15 * 60 * 1000 + 123)).toBe("15")
  expect(getMinute( 234)).toBe("00")
})

test("getHour should return result of length 2", () => {
  expect(getHour(6 * 60 * 60 * 1000 + 123).length).toBe(2)
  expect(getHour(25 * 60 * 60 * 1000 + 123).length).toBe(2)
  expect(getHour(15 * 60 * 60 * 1000 + 123).length).toBe(2)
  expect(getHour( 234).length).toBe(2)
})

test("getHour should return result correct value", () => {
  expect(getHour(6 * 60 * 60 * 1000 + 123)).toBe("06")
  expect(getHour(25 * 60 * 60 * 1000 + 123)).toBe("01")
  expect(getHour(15 * 60 * 60 * 1000 + 123)).toBe("15")
  expect(getHour( 234)).toBe("00")
})
