const popup = document.querySelector('.popup');
const popup_display = document.querySelector('.popup-display');
const popup_title = document.querySelector('.popup-title');
const popup_desc = document.querySelector('.popup-desc');
const popup_thumbnail = document.getElementById('popup-thumbnail');

function openPopup(projectName) {
    popup.classList.add('openPopup');

    if(projectName === 'Fitness2') {
        popup_thumbnail.src = 'images/Fitness2.png';
        popup_title.innerText = 'Jam\'s Powerlifting Companion';
        popup_desc.innerText = 'An application that combines the passions of lifting weights and writing code, this custom application was built from PySide6 and implements sqlite3 for its database. It allows for personal record tracking, dietary logging, and comes with wide variety of foods with nutritional information, thanks to a public nutritional database.' 
        popup_display.classList.add('openPopup');
    }
    else if(projectName === 'Airplanes') {
        popup_thumbnail.src = 'images/Airplanes.png';
        popup_title.innerText = 'Flight Delay Calculator';
        popup_desc.innerText = 'I like planes';
        popup_display.classList.add('openPopup');
    }
}

document.addEventListener('click', function(event) {
    if(!popup_display.contains(event.target)) {
        console.log('outside of contanier');
        popup_display.classList.remove('openPopup');
        popup_display.classList.add('closePopup');
    }
})