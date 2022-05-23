

let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];

let now = new Date();
let dayName = daysOfTheWeek[now.getDay()];
function yell() {
    console.log(alert(`Hello World! Happy ${dayName.toUpperCase()} to you! `))
}

yell()



