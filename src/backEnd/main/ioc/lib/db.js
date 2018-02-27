import mongoose from "mongoose";
import mongooseWrapper from "./../../lib/mongooseWrapper";
import { dbConfig } from "./../../../../config";

exports = module.exports = () => {

  let db = null;

  try {

    db = mongooseWrapper(mongoose, dbConfig.host, dbConfig.dbName, dbConfig.port, Promise);

  } catch (e) {
  
    console.error(e.message.error);

  }

  return db;
  
};

exports["@singleton"] = true;