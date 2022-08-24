setInterval(showTime, 1000);
function showTime(){
    let date = new Date();
    let hour = date.getHours(); // 0-23
    let minutes = date.getMinutes(); // 0-59
    let second = date.getSeconds(); // 0-59
    let day_of_week = date.getDay();
    let day_number = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let session = "AM";

    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
        
    }
    if (hour == 0) {
        hour = 12;
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    second = (second < 10) ? "0" + second : second;

    let days_of_week = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]

    let months = [
        "January",
        "Faburary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]
    

    let time = hour + ":" + minutes + ":" + second + " " + session;

    let my_date = days_of_week[day_of_week] + ", " + months[month] + " " + day_number + " " + year;

    document.getElementById("my_clock_display").innerHTML = time;
    document.getElementById("my_date_display").innerHTML = my_date;

    


}

