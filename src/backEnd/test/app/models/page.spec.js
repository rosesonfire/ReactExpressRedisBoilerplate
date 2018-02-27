/* eslint-disable no-undef */

import "./../../setup";
// mocks
import db from "../../mocks/lib/db";
// unit
import page from "./../../../main/app/models/page";

describe("Page Model", () => {

  let pageModel;
  let pageSchema;
  let mocks;

  before(() => {

    pageModel = {};
    pageSchema = {};
    mocks = [ db.model ];

  });

  beforeEach(() => {

    db.model.once().withExactArgs("page", pageSchema).returns(pageModel);
    
  });

  afterEach(() => {
    
    mocks.forEach(mock => {
      
      mock.verify();
      mock.reset();

    });
    
  });

  describe("When getting page model", () => {

    it("should return page model", () => {
      
      page(db, pageSchema).should.equal(pageModel);
        
    });

  });

});