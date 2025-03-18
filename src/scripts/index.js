// CSS imports
import '../styles/styles.css';
import 'leaflet/dist/leaflet.css'

import App from './pages/app';
import Camera from "./utils/camera";

document.addEventListener('DOMContentLoaded', async () => {
  const app = new App({
    content: document.getElementById('main-content'),
    drawerButton: document.getElementById('drawer-button'),
    navigationDrawer: document.getElementById('navigation-drawer'),
    skipLinkButton: document.getElementById('skip-link'),
  });
  await app.renderPage();

  window.addEventListener('hashchange', async () => {
    await app.renderPage();

    Camera.stopAllStreams();
  });
});

