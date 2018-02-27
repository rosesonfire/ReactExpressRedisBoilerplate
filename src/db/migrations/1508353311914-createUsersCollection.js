import userSchema from "./../../dataAccess/schemas/user";
import { dropModel, getNewModel } from "./../migrationHelper";

const modelName = "user";
const dropModel2 = dropModel(modelName, userSchema);
const getNewModel2 = getNewModel(modelName, userSchema);

/**
 * Make any changes you need to make to the database here
 */
export async function up () {

  const User = await getNewModel2(this);

  await User.create(
    {
      id: "user_1",
      username: "ishti_ik",
      password: "abcd",
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