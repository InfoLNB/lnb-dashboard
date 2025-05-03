function handleLogin(event) {
  event.preventDefault();
  const u = document.getElementById('username').value;
  const p = document.getElementById('password').value;
  if(u==='AdminBB'&&p==='BrianBasile83!') window.location.href='admin-dashboard.html';
  else alert('Identifiants incorrects.');
}