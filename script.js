document.documentElement.classList.add('js');
document.addEventListener('DOMContentLoaded', () => {
 const toggle = document.querySelector('.menu-toggle');
 const links = document.querySelector('.nav-links');
 if (toggle && links) {
  const setOpen = (open) => {
   links.classList.toggle('open', open);
   toggle.classList.toggle('active', open);
   toggle.setAttribute('aria-expanded', String(open));
   toggle.setAttribute('aria-label', open ? 'Chiudi menu' : 'Apri menu');
   if (window.matchMedia('(max-width: 760px)').matches) links.inert = !open;
   else links.inert = false;
  };
  setOpen(false);
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setOpen(false); toggle.focus(); } });
  document.addEventListener('click', e => { if (!e.target.closest('.navbar')) setOpen(false); });
  window.matchMedia('(max-width: 760px)').addEventListener('change', () => setOpen(false));
 }
 const form = document.getElementById('contact-form');
 if (!form) return;
 form.addEventListener('submit', async e => {
  e.preventDefault();
  const button = form.querySelector('button[type="submit"]');
  const status = document.getElementById('form-status');
  const label = button.textContent;
  button.disabled = true; button.textContent = 'Invio in corso…'; status.textContent = '';
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
   const response = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: {Accept: 'application/json'}, signal: controller.signal });
   if (!response.ok) throw new Error('Invio non riuscito');
   window.location.assign(form.dataset.success);
  } catch (error) {
   status.textContent = 'Non è stato possibile confermare l’invio. Il testo è ancora qui: riprova oppure scrivi a itsrougelab@gmail.com.';
   button.disabled = false; button.textContent = label;
  } finally { clearTimeout(timeout); }
 });
});
