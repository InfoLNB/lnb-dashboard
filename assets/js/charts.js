// Charts.js setup
document.addEventListener('DOMContentLoaded', async () => {
  const caData = await getCA();
  const hoursData = await getHours();
  new Chart(document.getElementById('caChart').getContext('2d'), { type:'bar', data:{ labels:['Jan','Fév','Mar','Avr'], datasets:[{ label:'CA Mensuel', data:caData }] } });
  new Chart(document.getElementById('hoursChart').getContext('2d'), { type:'line', data:{ labels:['Jan','Fév','Mar','Avr'], datasets:[{ label:'Heures Trav.', data:hoursData }] } });
});