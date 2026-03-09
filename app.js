let deferredPrompt;
const installBtn = document.getElementById('installBtn');
const status = document.getElementById('status');

function setStatus(message) {
  status.textContent = message;
}

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  installBtn.classList.remove('hidden');
  setStatus('App can be installed.');
});

installBtn.addEventListener('click', async () => {
  if (!deferredPrompt) return;

  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  deferredPrompt = null;
  installBtn.classList.add('hidden');

  setStatus(outcome === 'accepted' ? 'Install accepted.' : 'Install dismissed.');
});

window.addEventListener('appinstalled', () => {
  setStatus('App installed successfully.');
  installBtn.classList.add('hidden');
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      await navigator.serviceWorker.register('./sw.js');
      setStatus('Service worker registered. Offline support enabled.');
    } catch (error) {
      setStatus('Service worker registration failed.');
      console.error(error);
    }
  });
} else {
  setStatus('Service workers are not supported in this browser.');
}
