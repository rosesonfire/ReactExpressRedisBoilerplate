/* eslint-disable no-undef */

import { expect } from "./../../setup";
// mocks
import pageService from "../../mocks/app/services/pagesService";
import { req, res } from "./../../mocks/others/express";
// unit
import PageController from "./../../../main/app/controllers/pagesController";

describe("Page Controller", () => {

  let pageIds;
  let pageController;
  let mocks;

  before(() => {

    pageIds = [1,2,3];

    pageController = new PageController(pageService);

    mocks = [
      pageService.getPageIds,
      res.send
    ];

  });

  beforeEach(() => {

    pageService.getPageIds.once().withExactArgs().resolves(pageIds);
    res.send.once().withExactArgs(pageIds);

  });

  afterEach(() => {

    mocks.forEach(mock => {

      mock.verify();
      mock.reset();

    });

  });

  describe("When getting page ids", () => {

    it("should return nothing", async () => {

      expect(await pageController.getPageIds(req, res)).to.be.undefined;

    });

  });

});