import {getStoryById} from "../../data/api";
import {storyMapper} from "../../data/api-mapper";

export default class DetailPresenter {
    #storyId;
    #view;
    #apiModel;

    constructor(storyId, { view, apiModel }) {
        this.#storyId = storyId;
        this.#view = view;
        this.#apiModel = apiModel;
    }

    async showStoryDetailMap() {
        this.#view.showMapLoading();
        try {
            await this.#view.initialMap();
        } catch (error) {
            console.error('showDetailMap error', error);
        }finally {
            this.#view.hideMapLoading();
        }
    }

    async showStoryDetail() {
        this.#view.showStoryDetailLoading();
        try {
            const response = await this.#apiModel.getStoryById(this.#storyId)

            if (!response.ok) {
                console.error('showStoryDetail: response:', response);
                this.#view.populateStoryDetailError(response.message);
                return;
            }

            const story = await storyMapper(response.story);
            console.log(story);

            this.#view.populateStoryDetailAndInitialMap(response.message, story);
        } catch (error) {
            console.error('showStoryDetailAndMapError', error);
            this.#view.populateStoryDetailError(error.message);
        } finally {
            this.#view.hideStoryDetailLoading();
        }
    }

}