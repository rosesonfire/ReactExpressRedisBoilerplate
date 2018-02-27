import PagesController from "./../../../app/controllers/pagesController";

exports = module.exports = (pagesService) => {

  let pagesController = null;

  try {

    pagesController = new PagesController(pagesService);

  } catch (e) {

    console.error(e.message.error);

  }

  return pagesController;

};

exports["@require"] = ["app/services/pagesService"];
exports["@singleton"] = true;