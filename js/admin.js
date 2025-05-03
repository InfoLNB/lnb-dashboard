
const projects = [
  { id:1, name:"Yacht Sunrise", client:"Durand", activité:"Yachting", staff:["Basile","Brian"], status:"terminé" },
  { id:2, name:"Villa Canopée", client:"Marchand", activité:"Cover", staff:["Brian"], status:"encours" },
  { id:3, name:"Entrepôt Zone 83", client:"Société X", activité:"Painting", staff:["Basile"], status:"enattente" }
];

function renderProjects() {
  const ul = document.getElementById("projectList");
  ul.innerHTML = "";
  projects.forEach(p => {
    const li = document.createElement("li");
    li.dataset.status = p.status;
    li.innerHTML = `
      <div>
        <strong>${p.name}</strong><br/>
        Client : ${p.client}<br/>
        Activité : ${p.activité}<br/>
        👥 ${p.staff.join(", ")}
      </div>
      <button class="btn-archive" title="Archiver">🗄️</button>
    `;
    li.querySelector(".btn-archive").onclick = () => {
      li.remove();
      alert(`Projet « ${p.name} » archivé.`);
    };
    ul.appendChild(li);
  });
}

window.addEventListener("DOMContentLoaded", renderProjects);
