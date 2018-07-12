// Returns the day of the week for the given date.
function dayName(date) {
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                         "Thursday", "Friday", "Sunday"];
  return daysOfTheWeek[date.getDay()];
}

// Returns a greeting for the given date.
function greeting(date) {
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                         "Thursday", "Friday", "Sunday"];
  today = daysOfTheWeek[date.getDay()];

  return `Happy ${today}!`
}
