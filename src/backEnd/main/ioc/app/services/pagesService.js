import PagesService from "./../../../app/services/pagesService";

exports = module.exports = (Page) => {

  let pagesService = null;
  
  try {

    pagesService = new PagesService(Page);

  } catch (e) {
  
    console.error(e.message.error);

  }

  return pagesService;
  
};
   
exports["@require"] = ["app/models/page"];
exports["@singleton"] = true;