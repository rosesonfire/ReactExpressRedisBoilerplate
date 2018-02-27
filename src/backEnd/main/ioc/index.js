import IoC from "electrolyte";

IoC.use(IoC.dir("dist/backEnd/main/ioc"));

export const dependencies = {
  app: IoC.create("lib/app")
};