
// Appel backend sécurisé Render pour envoyer un e-mail d'intervention

async function envoyerIntervention(email, nomProjet, date, heure, tache) {
  const payload = {
    email: email,
    projet: nomProjet,
    date: date,
    heure: heure,
    tache: tache
  };

  try {
    const response = await fetch("https://lnb-backend.onrender.com/api/envoyer-intervention", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    if (result.success) {
      alert("✉️ Intervention envoyée avec succès !");
    } else {
      alert("Erreur lors de l'envoi.");
    }
  } catch (error) {
    alert("Échec de l'envoi : " + error.message);
  }
}
