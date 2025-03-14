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

export function generateStoriesListEmptyTemplate() {
    return `
        <div id="stories-list-empty" class="stories-list__empty">
          <h2>Tidak ada Story yang tersedia</h2>
          <p>Saat ini, tidak ada Story yang dapat ditampilkan.</p>
        </div>
    `;
}

export function generateReportsListErrorTemplate(message) {
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
          <img class="story-item__image" src="${photoUrl[0]}" alt="${name}">
          <div class="story-item__body">
            <div class="story-item__main">
              <h2 id="story-title" class="story-item__title">${name}</h2>
              <div class="story-item__more-info">
                <div class="story-item__createdat">
                  <i class="fas fa-calendar-alt"></i> ${showFormattedDate(createdAt, 'id-ID')}
                </div>
                <div class="story-item__location">
                  <i class="fas fa-map"></i> ${Object.values(location)}
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