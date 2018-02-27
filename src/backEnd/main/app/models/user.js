export default (db, userSchema) => {

  return db.model("user", userSchema);

};