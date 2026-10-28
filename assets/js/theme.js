(() => {
  const root = document.documentElement;
  let savedTheme;
  try { savedTheme = localStorage.getItem('vanct-theme'); } catch {}
  root.dataset.theme = savedTheme === 'dark' ? 'dark' : 'light';

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.theme-toggle');
    if (!button) return;
    const updateButton = () => {
      const dark = root.dataset.theme === 'dark';
      const label = dark ? '切换到浅色模式' : '切换到暗色模式';
      button.setAttribute('aria-label', label);
      button.setAttribute('title', label);
      button.setAttribute('aria-pressed', String(dark));
    };
    updateButton();
    button.hidden = false;
    button.addEventListener('click', () => {
      root.classList.add('theme-animated');
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('vanct-theme', root.dataset.theme); } catch {}
      updateButton();
    });
    window.addEventListener('storage', (event) => {
      if (event.key !== 'vanct-theme') return;
      root.classList.add('theme-animated');
      root.dataset.theme = event.newValue === 'dark' ? 'dark' : 'light';
      updateButton();
    });
  });
})();
