// calendar.js
// FullCalendar initialization
const calendarEl = document.getElementById('calendar');
const calendar = new FullCalendar.Calendar(calendarEl, {initialView:'dayGridMonth', events: []});
calendar.render();
