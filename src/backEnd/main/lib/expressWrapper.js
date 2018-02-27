// TODO: Can this be done without mutation?
export default (express, host, port, middlewares, router) => {
  
  const app = express();
  
  middlewares.setMiddlewares(app);
  router.setRoutes(app);
  
  app.listen2 = (preListenF, postListenF) => {

    app.listen(
      port,
      host,
      () => {

        console.log("Starting server...");
        preListenF();

      },
      () => {

        console.log(`Started server at (${host}, ${port})...`);
        postListenF();

      }
    );
    
  };

  return app;
};