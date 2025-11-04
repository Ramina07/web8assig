// === Modal for Offers ===
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('offer-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-description');
  const closeBtn = document.querySelector('.modal .close');

  document.querySelectorAll('.offer-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const offer = btn.closest('.offer');
      const title = offer.querySelector('h3').textContent;
      const desc = offer.querySelector('p').textContent;

      modalTitle.textContent = title;
      modalDesc.textContent = desc;
      modal.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });
});
