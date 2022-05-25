// user log out
async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
//checking response
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}
//event listener
document.querySelector('#logout').addEventListener('click', logout);