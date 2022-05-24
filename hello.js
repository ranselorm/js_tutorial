

let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];

let now = new Date();
let dayName = daysOfTheWeek[now.getDay()];
function yell() {
    console.log(alert(`Hey Rose! Happy ${dayName.toUpperCase()} --from Wandi `))
}

yell()

let birthYear = new Date("September 20, 1990")
console.log(birthYear)
console.log(now - birthYear)
