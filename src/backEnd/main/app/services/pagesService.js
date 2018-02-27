export default class PagesService {
  constructor (Page) {
    this.Page = Page
  }

  async getPageIds () {
    const pages = await this.Page.find()
    const pageIds = pages.map(page => page.id)

    return pageIds
  }
}
