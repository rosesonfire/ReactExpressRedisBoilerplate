// TODO: Can this be done without mutation?
export default (mongoose, host, dbName, port, promise) => {
  
  mongoose.Promise = promise;
  
  const db = mongoose.createConnection(host, dbName, port);

  return db;
};