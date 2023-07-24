const popup = document.querySelector('.popup');
const popup_display = document.querySelector('.popup-display');
const popup_title = document.querySelector('.popup-title');
const popup_desc = document.querySelector('.popup-desc');
const popup_thumbnail = document.getElementById('popup-thumbnail');
let opened = false;

function openPopup(projectName) {
    popup.classList.add('openPopup');

    if(projectName === 'Fitness2') {
        popup_thumbnail.src = 'images/Fitness2.png';
        popup_title.innerText = 'Jam\'s Powerlifting Companion';
        popup_desc.innerText = 'An application that combines the passions of lifting weights and writing code, this custom application was built from PySide6 and implements sqlite3 for its database. It allows for personal record tracking, dietary logging, and comes with wide variety of foods with nutritional information, thanks to a public nutritional database.' 
        popup_display.classList.add('openPopup');
        setTimeout(function() { //you need to have a bit of time in between before setting the boolean to true or else it will simultaneously register as true on the first click and outside popup-display
            opened = true;
        },200)    
    }
    else if(projectName === 'Airplanes') {
        popup_thumbnail.src = 'images/Airplanes.png';
        popup_title.innerText = 'Flight Delay Calculator';
        popup_desc.innerText = 'A team project made with Qt and a public flight database, the aim of this application is to find the average flight delay time and frequency between the airports of 2 cities. As mentioned, it allows for the user to choose 2 cities of departure and arrival, as well as the day of the week that the flight is. It also allows for Graph/Hash Table lookup, all implemented in C++ for efficient retrieval.';
        popup_display.classList.add('openPopup');
        setTimeout(function() {
            opened = true;
        },200)
    }
    else if(projectName === 'Wildfire') {
        popup_thumbnail.src = 'images/Wildfire.png';
        popup_title.innerText = 'U.S. Wildfire Webpage';
        popup_desc.innerText = 'A webpage that aims to analyze the data available from a public U.S. Wildfire Database from 1992 - 2020. This was a team effort that produced a webpage with 5 customizable queries that give the user information about the frequency, locations, responding units of wildfires and more. It is complete with graphs from the library Chart.JS and allows for the user to enter their own variables such as U.S. state, time range and more.';
        popup_display.classList.add('openPopup');
        setTimeout(function() {
            opened = true;
        },200)
    }
}

document.addEventListener('click', function(event) {
    if(opened === true && !popup_display.contains(event.target)) {
        popup_display.classList.add('closePopup');
        setTimeout(function() {
            popup_display.classList.remove('openPopup');
            popup_display.classList.remove('closePopup');
            popup.classList.remove('openPopup');
            opened = false;
        }, 400)
    }
})