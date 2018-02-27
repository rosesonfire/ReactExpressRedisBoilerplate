import { Schema } from "mongoose";

const user = new Schema({
  id          : String,
  username      : String,
  password      : String,
  dateCreated     : Date,
  dateModified    : Date
});

export default user;