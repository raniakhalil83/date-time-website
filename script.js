var date = new Date();

// We can take a look at what d contains with the console:
console.log(date)

// Extract the date from d:
var currentDate = date.toDateString()

// Extract the time from d:
var currentTime = date.toLocaleTimeString()

document.body.innerHTML = "<h1>Today's date is " + currentDate + "</h1> <h2> The time is " + currentTime + "</h2>"