import DetailPresenter from "./detail-presenter";
import {parseActivePathname} from "../../routes/url-parser";
import * as StoriesAPI from "../../data/api";
import {
    generateLoaderAbsoluteTemplate,
    generateStoryDetailErrorTemplate,
    generateStoryDetailTemplate
} from "../../template";
import Map from "../../utils/map";

export default class DetailPage {
    #presenter = null;
    #map = null;

    async render() {
        return `
            <section>
                <div class="story-detail__container">
                    <div id="story-detail" class="story-detail"></div>
                    <div id="story-detail-loading-container"></div>
                </div>
            </section>
        `;
    }

    async afterRender() {
        this.#presenter = new DetailPresenter(parseActivePathname().id, {
            view: this,
            apiModel: StoriesAPI,
        });

        this.#presenter.showStoryDetail()
    }

    async populateStoryDetailAndInitialMap(message, story) {
        document.getElementById('story-detail').innerHTML = generateStoryDetailTemplate({
            authorName: story.name,
            description: story.description,
            image: story.photoUrl,
            createdAt: story.createdAt,
            location: { latitude: story.lat, longitude: story.lon },
        });

        await this.#presenter.showStoryDetailMap();
        if (this.#map) {
            const coordinate = [story.location.latitude, story.location.longitude];
            const markerOptions = { alt: story.description };
            const popupOptions = { content: story.description };

            this.#map.changeCamera(coordinate);
            this.#map.addMarker(coordinate, markerOptions, popupOptions);
        }
    }

    populateStoryDetailError(message) {
        document.getElementById('story-detail').innerHTML = generateStoryDetailErrorTemplate(message)
    }

    async initialMap() {
        console.log('Memulai peta...');
        this.#map = await Map.build('#map', {
            zoom: 15,
        })
        console.log('Peta berhasil dibuat:', this.#map);
    }

    showStoryDetailLoading() {
        document.getElementById('story-detail-loading-container').innerHTML =
            generateLoaderAbsoluteTemplate();
    }

    hideStoryDetailLoading() {
        document.getElementById('story-detail-loading-container').innerHTML = '';
    }

    showMapLoading() {
        document.getElementById('map-loading-container').innerHTML = generateLoaderAbsoluteTemplate();
    }

    hideMapLoading() {
        document.getElementById('map-loading-container').innerHTML = '';
    }
}