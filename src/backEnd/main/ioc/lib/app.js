import express from "express";
import expressWrapper from "./../../lib/expressWrapper";
import { backEndConfig } from "./../../../../config";

exports = module.exports = (middlewares, router) => {

  let app = null;
  
  try {

    app = expressWrapper(express, backEndConfig.host, backEndConfig.port, middlewares, router);

  } catch (e) {
  
    console.error(e.message.error);

  }

  return app;
  
};

exports["@require"] = ["config/middlewares", "config/router"];
exports["@singleton"] = true;