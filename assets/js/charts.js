// charts.js
// Exemple : graphique CA
const ctx = document.getElementById('revenueChart').getContext('2d');
new Chart(ctx, {type:'line', data:{labels:[], datasets:[{label:'CA Mensuel',data:[]} ]}});
