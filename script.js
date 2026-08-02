
const dialog = document.getElementById('loginDialog');
const openLogin = document.getElementById('openLogin');
const requestAccess = document.getElementById('requestAccess');
const loginForm = document.getElementById('loginForm');
const filter = document.getElementById('categoryFilter');

function openDialog() {
  if (typeof dialog.showModal === 'function') dialog.showModal();
}

openLogin.addEventListener('click', openDialog);
requestAccess.addEventListener('click', openDialog);

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  if (!email.includes('@') || password.length < 4) {
    alert('Inserisci un’e-mail valida e una password di almeno 4 caratteri.');
    return;
  }
  document.body.classList.add('logged-in');
  openLogin.textContent = 'Area B2B attiva';
  dialog.close();
});

filter.addEventListener('change', () => {
  const value = filter.value;
  document.querySelectorAll('.product-card').forEach(card => {
    card.style.display = value === 'all' || card.dataset.category === value ? '' : 'none';
  });
});

document.querySelectorAll('.quote-btn').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.closest('.product-card').querySelector('h3').textContent;
    window.location.href = `mailto:commerciale@alcolika.it?subject=Richiesta disponibilità ${encodeURIComponent(name)}`;
  });
});
