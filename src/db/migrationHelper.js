export const dropModel = (modelName, schema) => async db => {

  const oldModel = db(modelName, schema);

  await oldModel.remove({});

};

export const getNewModel = (modelName, schema) => async db => {

  await dropModel(modelName, schema)(db);

  const newModel = db(modelName, schema);

  return newModel;

};