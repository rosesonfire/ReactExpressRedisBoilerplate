/* eslint-disable no-undef */

import "./../../setup";
// mocks
import db from "../../mocks/lib/db";
// unit
import user from "./../../../main/app/models/user";

describe("User Model", () => {

  let userModel;
  let userSchema;
  let mocks;

  before(() => {

    userModel = {};
    userSchema = {};
    mocks = [ db.model ];

  });

  beforeEach(() => {

    db.model.once().withExactArgs("user", userSchema).returns(userModel);
    
  });

  afterEach(() => {
    
    mocks.forEach(mock => {
      
      mock.verify();
      mock.reset();

    });
    
  });

  describe("When getting user model", () => {

    it("should return user model", () => {
      
      user(db, userSchema).should.equal(userModel);
        
    });

  });

});