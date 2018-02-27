import pageSchema from "./../../dataAccess/schemas/page";
import { dropModel, getNewModel } from "./../migrationHelper";

const modelName = "page";
const dropModel2 = dropModel(modelName, pageSchema);
const getNewModel2 = getNewModel(modelName, pageSchema);

/**
 * Make any changes you need to make to the database here
 */
export async function up () {

  const Page = await getNewModel2(this);

  await Page.create(
    {
      id: "page_home",
      name: "home",
      dateCreated: new Date(),
      dateModified: new Date()
    },
    {
      id: "page_meeting_events",
      name: "meeting events",
      dateCreated: new Date(),
      dateModified: new Date()
    }
  );

}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
export async function down () {

  await dropModel2(this);

}
