const calendarMatching = (calendar1, dailyBounds1, calendar2, dailyBounds2, meetingDuration) => {
  const updatedCalendar1 = getUpdatedCalendar(calendar1, dailyBounds1)
  const updatedCalendar2 = getUpdatedCalendar(calendar2, dailyBounds2)
  const mergedCalendar = getMergedCalendar(updatedCalendar1, updatedCalendar2)
  const gaps = getMatchingAvailabilities(mergedCalendar, meetingDuration)
  return gaps.map(g => [minutesToTime(g[0]),minutesToTime(g[1])])
}

const getUpdatedCalendar = (calendar, dailyBounds) => {
  const updatedCalendar = Array.from(calendar)
  updatedCalendar.splice(0, 0, ["0:00", dailyBounds[0]])
  updatedCalendar.push([dailyBounds[1], "23:59"])
  return updatedCalendar.map(m => [timeToMinutes(m[0]), timeToMinutes(m[1])])
}

const timeToMinutes = (time) => {
  const [hours, minutes] = time.split(":").map(t => parseInt(t))
  return (hours * 60) + minutes
}

const minutesToTime = (minutes) => {
  const [remMins, hours] = [minutes % 60, ~~(minutes / 60)]
  return `${hours}:${remMins === 0 ? "00" : remMins}`
}

const getMergedCalendar = (calendar1, calendar2) => {
  const mergedCalendar = []
  let i = 0, j = 0;
  while (i < calendar1.length && j < calendar2.length) {
    if (calendar1[i][0] <= calendar2[j][0]) {
      mergedCalendar.push(calendar1[i])
      i++
    } else {
      mergedCalendar.push(calendar2[j])
      j++
    }
  }
  if (i < calendar1.length) {
    mergedCalendar.push(...calendar1.slice(i, calendar1.length))
  }
  if (j < calendar2.length) {
    mergedCalendar.push(...calendar2.slice(j, calendar2.length))
  }
  const flattenedCal = [mergedCalendar[0]]
  for (let i = 1; i < mergedCalendar.length; i++) {
    if (mergedCalendar[i][0] <= mergedCalendar[i - 1][1]) {
      flattenedCal[flattenedCal.length - 1][1] = mergedCalendar[i][1]
    } else {
      flattenedCal.push(mergedCalendar[i])
    }
  }
  return flattenedCal
}

const getMatchingAvailabilities = (calendar, duration) => {
  const matchingAvailabilities = []
  for (let i = 0; i < calendar.length - 1; i++) {
    if (calendar[i + 1][0] - calendar[i][1] >= duration) {
      matchingAvailabilities.push([calendar[i][1], calendar[i + 1][0]])
    }
  }
  return matchingAvailabilities
}

const cal1 = [["9:00", "10:30"], ["12:00", "13:00"], ["16:00", "18:00"]]
const cal2 = [["10:00", "11:30"], ["12:30", "14:30"], ["14:30", "15:00"], ["16:00", "17:00"]]
const db1 = ["9:00", "20:00"]
const db2 = ["10:00", "18:30"]


console.log(calendarMatching(cal1, db1, cal2, db2, 30))