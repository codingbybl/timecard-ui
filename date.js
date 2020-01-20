//jshint esversion: 6

exports.getDate = function() {
  const today = new Date();
  // format a JavaScript date using toLocaleDateString -- https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
  const options = {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric"
  };
  return today.toLocaleDateString("en-US", options);
}

exports.getYear = function() {
  const currentYear = new Date();
  // https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date?rq=1
  const yearOptions = {
    year: 'numeric'
  };
  curYear = currentYear.toLocaleDateString("en-US", yearOptions); // 9/17/2016
  return currentYear.toLocaleDateString("en-US", yearOptions);
}
