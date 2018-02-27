export default (db, pageSchema) => {

  return db.model("page", pageSchema);

};