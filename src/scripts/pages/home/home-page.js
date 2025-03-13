export default class HomePage {
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
  }
}
