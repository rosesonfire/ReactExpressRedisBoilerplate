import { Schema } from "mongoose";

const page = new Schema({
  id          : String,
  name        : String,
  dateCreated     : Date,
  dateModified    : Date
});

export default page;