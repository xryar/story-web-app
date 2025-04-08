// CSS imports
import '../styles/styles.css';
import 'leaflet/dist/leaflet.css'

import App from './pages/app';
import Camera from "./utils/camera";
import {registerServiceWorker} from "./utils";

document.addEventListener('DOMContentLoaded', async () => {
  const app = new App({
    content: document.getElementById('main-content'),
    drawerButton: document.getElementById('drawer-button'),
    navigationDrawer: document.getElementById('navigation-drawer'),
    skipLinkButton: document.getElementById('skip-link'),
  });

  setTimeout(() => app.renderPage(), 500)
  await registerServiceWorker()

  window.addEventListener('hashchange', async () => {
    await app.renderPage();

    Camera.stopAllStreams();
  });
});

