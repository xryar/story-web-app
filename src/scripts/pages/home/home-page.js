import HomePresenter from "./home-page-presenter";
import * as StoriesAPI from "../../data/api";

export default class HomePage {
  #presenter;

  async render() {
    return `
      <section class="container">
        <h1 class="section-title">Home Page</h1>
        
        <div class="stories-list__container">
            <div id="stories-list"></div>
            <div id="stories-list-loading-container"></div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    // Do your job here
    this.#presenter = new HomePresenter({
      view: this,
      model: StoriesAPI,
    });

    await this.#presenter.initialStories();
  }

  populateStoriesList(message, stories) {
    if (stories.length <= 0) {
      this.populateStoriesListEmpty();
      return;
    }

    const html = stories.reduce((acc, story) => {})
  }

  populateStoriesListEmpty() {}
}
