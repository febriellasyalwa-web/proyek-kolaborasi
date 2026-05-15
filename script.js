const card = document.querySelector('.card');

card.addEventListener('mouseover', () => {
  card.style.transform = 'translateY(-8px)';
});

card.addEventListener('mouseout', () => {
  card.style.transform = 'translateY(0)';
});