/* eslint-disable no-undef */

import "./../setup";
// mocks
import mongoose from "../mocks/others/mongoose";
import db from "../mocks/lib/db";
// unit
import mongooseWrapper from "./../../main/lib/mongooseWrapper";

describe("Mongoose Wrapper", () => {
  
  let
    host,
    dbName,
    port,
    promise,
    mocks;

  before(() => {

    host = "host",
    dbName = "db",
    port = 1234;
    promise = {};
    mocks = [
      mongoose.createConnection
    ];

  });

  beforeEach(() => {

    mongoose.createConnection.once().withExactArgs(host, dbName, port).returns(db);
    
  });

  afterEach(() => {

    mocks.forEach(mock => {
      
      mock.verify();
      mock.reset();

    });
    delete mongoose.Promise;
    
  });

  describe("When getting mongoose wrapper", () => {

    it("should return mongoose wrapper", () => {
  
      mongooseWrapper(mongoose, host, dbName, port, promise).should.equal(db);
        
    });

    it("should have correct Promise property", () => {
      
      mongooseWrapper(mongoose, host, dbName, port, promise);
      mongoose.should.have.property("Promise");
      mongoose.Promise.should.equal(promise);
        
    });

  });

});