import colors from "colors";
import { dependencies } from "./ioc";

// ========= Console log colorization ==============

colors.setTheme({
  error: "red"
});

// ========== Initialize mvc application ==========

const initialize = async () => {

  const app = await dependencies.app;
  
  app.listen2(() => {}, () => {});
  
};
  
initialize().catch(err => {
  console.error(err.message.error);
});