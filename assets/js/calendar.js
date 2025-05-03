// FullCalendar setup
document.addEventListener('DOMContentLoaded', async () => {
  const calendarEl = document.getElementById('calendar');
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: async () => await getEvents()
  });
  calendar.render();
});