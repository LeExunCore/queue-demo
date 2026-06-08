import dayjs from "dayjs";

export function getCurrentWeek(startDate) {
  const now = dayjs();
  const diff = now.diff(dayjs(startDate), "week") + 1;
  return diff;
}

export function getToday() {
  return dayjs().format("YYYY-MM-DD");
}

export function getWeekDay() {
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekDays[dayjs().day()];
}

export function formatDate(date) {
  return dayjs(date).format("YYYY-MM-DD");
}
