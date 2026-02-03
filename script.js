const form = document.querySelector('.newsletter__form');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = form.querySelector('input');
  if (!input) return;
  const email = input.value.trim();
  if (!email) return;

  form.reset();
  alert('Cadastro realizado com sucesso! Em breve você receberá novidades.');
});
