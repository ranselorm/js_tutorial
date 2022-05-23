

let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];

let now = new Date();
let dayName = daysOfTheWeek[now.getDay()];
alert(`Hello World! Happy ${dayName.toUpperCase()} to you! `)




