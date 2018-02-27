import { dbConfig } from "./../config";

module.exports = {
  dbConnectionUri: `mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.dbName}/migrations`,
  autosync: true,
  es6: true
};