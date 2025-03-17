import {showFormattedDate} from "./utils";

export function generateLoaderTemplate() {
    return `
        <div class="loader"></div>
    `;
}

export function generateLoaderAbsoluteTemplate() {
    return `
        <div class="loader loader-absolute"></div>
    `;
}

export function generateMainNavigationListTemplate() {
    return `
        <li><a id="story-list-button" class="story-list-button" href="#/">Daftar Story</a></li>
        <li><a id="bookmark-button" class="bookmark-button" href="#/bookmark">Story Tersimpan</a></li>
    `
}

export function generateUnauthenticatedNavigationListTemplate() {
    return `
        <li id="push-notification-tools" class="push-notifications-tools"></li>
        <li> <a id="login-button" href="#/login">Login</a></li>
        <li> <a id="register-button" href="#/register">Register</a></li>
    `;
}

export function generateAuthenticatedNavigationListTemplate() {
    return `
        <li id="push-notification-tools" class="push-notifications-tools"></li>
        <li> <a id="new-story-button" class="btn new-story-button" href="#/new">Add Story <i class="fas fa-plus"></i></a></li>
        <li> <a id="logout-button" class="logout-button" href="#/logout"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
    `
}

export function generateStoriesListEmptyTemplate() {
    return `
        <div id="stories-list-empty" class="stories-list__empty">
          <h2>Tidak ada Story yang tersedia</h2>
          <p>Saat ini, tidak ada Story yang dapat ditampilkan.</p>
        </div>
    `;
}

export function generateStoriesListErrorTemplate(message) {
    return `
        <div id="stories-list-error" class="stories-list__error">
          <h2>Terjadi kesalahan pengambilan daftar story</h2>
          <p>${message ? message : 'Gunakan jaringan lain atau laporkan error ini.'}</p>
        </div>
    `;
}

export function generateStoryItemTemplate({
    id,
    name,
    description,
    photoUrl,
    createdAt,
    location,
}) {
    return `
        <div tabindex="0" class="story-item" data-storyid="${id}">
          <img class="story-item__image" src="${photoUrl}" alt="${name}">
          <div class="story-item__body">
            <div class="story-item__main">
              <h2 id="story-title" class="story-item__title">${name}</h2>
              <div class="story-item__more-info">
                <div class="story-item__createdat">
                  <i class="fas fa-calendar-alt"></i> ${showFormattedDate(createdAt, 'id-ID')}
                </div>
                <div class="story-item__location">
                  <i class="fas fa-map"></i>${location.latitude ?? "Tidak ada data"}, ${location.longitude ?? "Tidak ada data"}
                </div>
              </div>
            </div>
            <div id="story-description" class="story-item__description">
              ${description}
            </div>
            <div class="story-item__more-info">
              <div class="story-item__author">
                Dilaporkan oleh: ${name}
              </div>
            </div>
            <a class="btn story-item__read-more" href="#/stories/${id}">
              Selengkapnya <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
    `
}