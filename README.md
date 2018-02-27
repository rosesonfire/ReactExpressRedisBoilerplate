# ReactExpressRedisBoilerplate
## First time installation
`npm install`
## To migrate database
`npm run migrate`
## To start application
`npm start`
## To test application
`npm test`<br />
This will also generate html test coverage reports under [coverage](coverage) and open the reports on browser.
## Notes
- Servers will automatically reload on changes.
- Browsers will automatically reload on changes in [frontEnd](src/frontEnd/main) folder.
- Code inside [dist](dist) is auto-generated, **DO NOT** make any change in it.
- Edit code inside [src](src) is for development purpose.
- Database used is **mongoDB**.
## Mode
- **Development mode** - set `NODE_ENV` to `development`.
- **Production mode** - set `NODE_ENV` to `production`.
## Configuration files
All the necessary configurations like back end server, front end server, database, etc are stored in the [configuration folder](src/main/config). A [README](config.README.md) is available for it.
## Database migration
- To create a new migration run `npm run create-migration <name>`. This will create a new migration in [src/main/db/migrations](src/main/db/migrations) with the given _name_.
- To migrate up run `npm run migrate`. This will migrate up all the migrations into the database.
- To migrate down run `npm run migrate down <name>`. This will migrate down the migration with the given name from the database.
- To list migrations run `npm run list-migrations`. This will list all the migrations with their statuses.
- To prun migrations run `npm run prune-migrations`. This will remove all the deleted migrations from the database.
## Files
1. [.babelrc](.babelrc) - the babel configuration file, for configuring es6 traspilation configuration.
1. [config.README.md](config.README.md) - describes the configurations.
1. [.eslintrc.json](.eslintrc.json) - eslint configuration file.
1. [package.json](package.json) - npm package configuration. Contains list of dependencies and scripts. A [README](package.json.README.md) is available for it.
1. [package.json.README.md](package.json.README.md) - describes the dependencies and scripts in package.json.
1. [README.md](README.md) - this file, contains necessary documentations.
1. [src](src) - the folder that contains the development code. Edit files in this folder for development purpose.
    1. [backEnd](src/backEnd) - contains the back end code.
        1. [main](src/backEnd/main) - the back end dev code.
            1. [app](src/backEnd/main/app) - contains the mvc application.
                1. [controllers](src/backEnd/main/app/controllers) - contains the mvc controllers.
                1. [services](src/backEnd/main/app/services) - contains the business logic.
            1. [config](src/backEnd/main/config) - configurations of the back-end app like routers, middlewares, etc.
                1. [Middlewares](src/backEnd/main/config/middlewares.js) - contains the middleware configurations.
                1. [Router](src/backEnd/main/config/router.js) - HTTP router.
            1. [index.js](src/backEnd/main/index.js) - the code that is run by nodemon for starting the back end server.
            1. [ioc](src/backEnd/main/ioc) - contains inversion of control configurations.
            1. [lib](src/backEnd/main/lib) - contains customized libraries.
        1. [test](src/backEnd/test) - the back end tests.
    1. [config](src/config) - contains different configurations.
        1. [dev.conf.js](src/config/dev.conf.js) - configuration file for **devlopment mode**.
        1. [index.js](src/config/index.js) - configuration resolved based on **mode**.
        1. [prod.conf.js](src/config/prod.conf.js) - configuration file **production mode**.
    1. [dataAccess](src/dataAccess) - contains the database schemas.
    1. [db](src/db) - contains the database migration configurations.
        1. [migrations](src/db/migrations) - contains the database migration files.
        1. [migrate.conf.js](src/db/migrate.conf.js) - contains the database migration configurations.
        1. [MigrationHelper](src/db/migrationHelper.js) - contains helper functionality for migration.
    1. [frontEnd](src/frontEnd) - contains the front end code.
        1. [main](src/frontEnd/main) - the front end dev code.
            1. [app](src/frontEnd/main/app) - contains the react application.
                1. [actions](src/frontEnd/main/app/actions) - contains the redux actions.
                1. [components](src/frontEnd/main/app/components) - contains the react components.
                    1. [App](src/frontEnd/main/app/components/app.js) - react entry component.
                    1. [pages](src/frontEnd/main/app/components/pages) - contains the client side routed pages.
                1. [middlewares](src/frontEnd/main/app/middlewares) - contains the custom redux middlewares.
                1. [reducers](src/frontEnd/main/app/reducers) - contains the redux reducers.
                1. [services](src/frontEnd/main/app/services) - contains the async services.
                1. [template.html](src/frontEnd/main/app/template.html) - landing template for react application.
            1. [img](src/frontEnd/main/img) - folder for storing custom images.
            1. [index.js](src/frontEnd/main/index.js) - the code that is run by webpack dev server for starting the front end server.
            1. [registry](src/frontEnd/main/registry) - contain registered stuff (needs to be improved).
            1. [scripts](src/frontEnd/main/scripts) - folder for storing custom js.
            1. [styles](src/frontEnd/main/styles) - folder for storing custom css.
            1. [webpack.config.js](src/frontEnd/main/webpack.config.js) - contains the webpack configurations.
        1. [test](src/frontEnd/test) - the front end tests.
1. [tsconfig.json](tsconfig.json) - type script configuration. Needed for decorators in vscode.
## Generated folders and files
1. [.nyc_output](.nyc_output) - the folder in which the test coverage data is saved in.
1. [coverage](coverage) - the folder in which the test covergage reports are generated into.
1. [dist](dist) - the folder in which the es6 code is transpiled into and the servers runs on.
1. [node_modules](node_modules) - the folder in which the node modules are installed.
1. [package-lock.json](package-lock.json) - the compiled npm package configuration file.