(() => {
  const button = document.querySelector('[data-copy-email]');
  const status = document.getElementById('email-copy-status');
  const fallback = document.querySelector('.social-email-fallback');
  if (!button || !status || !fallback) return;

  let resetTimer;
  button.addEventListener('click', async () => {
    clearTimeout(resetTimer);
    button.disabled = true;
    fallback.hidden = true;
    try {
      await navigator.clipboard.writeText(button.dataset.copyEmail);
      status.textContent = '邮箱已复制';
    } catch {
      // Offer manual copying when clipboard access is unavailable or denied.
      status.textContent = '无法自动复制，请选中下方邮箱手动复制';
      fallback.hidden = false;
      fallback.focus();
      fallback.select();
    } finally {
      button.disabled = false;
    }
    if (fallback.hidden) {
      resetTimer = setTimeout(() => { status.textContent = ''; }, 4000);
    }
  });
})();
