/* eslint-disable no-undef */

import "./../setup";
// mocks
import express from "../mocks/others/express";
import middlewares from "./../mocks/config/middlewares";
import router from "./../mocks/config/router";
import app from "./../mocks/lib/app";
import anonymous from "./../mocks/others/anonymous";
// unit
import expressWrapper from "./../../main/lib/expressWrapper";

describe("Express Wrapper", () => {

  let
    host, 
    port,
    mocks,
    preListenF,
    postListenF;

  before(() => {

    host = "host",
    port = 1234;
    preListenF = anonymous();
    postListenF = anonymous();
    mocks = [
      express,
      middlewares.setMiddlewares,
      router.setRoutes
    ];

  });

  beforeEach(() => {

    express.once().returns(app);
    middlewares.setMiddlewares.once().withExactArgs(app);
    router.setRoutes.once().withExactArgs(app);    
    
  });

  afterEach(() => {

    mocks.forEach(mock => {
      
      mock.verify();
      mock.reset();

    });
    delete app.listen2;
    
  });

  describe("When getting express wrapper", () => {

    it("should return express wrapper", () => {
  
      expressWrapper(express, host, port, middlewares, router).should.equal(app);
        
    });

    it("should have listen2 method", () => {
      
      expressWrapper(express, host, port, middlewares, router);
      app.should.have.property("listen2");
      app.listen2.should.be.a("function");
        
    });

    it("should call listen with correct configuration when listen2 is called", () => {

      preListenF.once().withExactArgs();
      postListenF.once().withExactArgs();
      app.listen.once().withArgs(port, host).callsFake((_port, _host, preListenFWrapper, postListenFWrapper) => {

        preListenFWrapper();
        postListenFWrapper();

      });

      expressWrapper(express, host, port, middlewares, router);
      app.listen2(preListenF, postListenF);

      app.listen.verify();
      preListenF.verify();
      postListenF.verify();

      app.listen.reset();
      preListenF.reset();
      postListenF.reset();
        
    });

  });

});