(function(){
  const input = document.querySelector('[data-filter]');
  const cards = Array.from(document.querySelectorAll('[data-card]'));
  if(!input || cards.length === 0) return;

  function norm(s){ return (s || '').toLowerCase(); }

  input.addEventListener('input', () => {
    const q = norm(input.value);
    cards.forEach(card => {
      const hay = norm(card.getAttribute('data-haystack'));
      card.style.display = hay.includes(q) ? '' : 'none';
    });
  });
})();
