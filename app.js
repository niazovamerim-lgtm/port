// Тема которуу
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  if (currentTheme === 'light') {
    document.body.removeAttribute('data-theme');
    themeToggleBtn.textContent = '🌙';
  } else {
    document.body.setAttribute('data-theme', 'light');
    themeToggleBtn.textContent = '☀️';
  }
});

// Долбоорлорду фильтрациялоо
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Активдүү кнопканы өзгөртүү
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

projectCards.forEach(card => {
  card.addEventListener('click', event => {
    if (!event.target.closest('a')) {
      window.location.href = card.dataset.projectUrl;
    }
  });

  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' && !event.target.closest('a')) {
      window.location.href = card.dataset.projectUrl;
    }
  });
});