export default class HomePresenter {
    #view;
    #model;

    constructor({ view, model }) {
        this.#view = view;
        this.#model = model;
    }

    async initialStories() {
        this.#view.showLoading();
        try {
            const response = await this.#model.getAllStories();

            if (!response.ok) {
                console.error('initialStories: response:', response);
                this.#view.populateStoriesListError(response.message);
                return;
            }

            this.#view.populateStoriesList(response.message, response.listStory);
        } catch (error) {
            console.error('initialStories error:', error);
        } finally {
            this.#view.hideLoading();
        }
    }
}