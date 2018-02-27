export default class PagesController {

  constructor(pagesService) {

    this.pagesService = pagesService;

  }

  async getPageIds(req, res) {

    const pageIds = await this.pagesService.getPageIds();

    res.send(pageIds);

  }
}