# Scripts
1. **clean** - clears the _dist_ folder.
1. **build** - transpiles ES6 code of _src_ folder into _dist_ folder.
1. **clean-build** - runs **clean**, then **build**.
1. **build-with-watch** - transpiles ES6 code of _src_ folder into _dist_ folder, then starts a watcher to detect changes in _src_ folder and re-transpiles every time a change is detected.
1. **list-migrations** - runs **clean-build**, then lists all existing db migrations in _dist/db/migrations_ along with their statuses.
1. **create-migration \<name\>** - runs **clean-build**, then creates a new migration in _src/db/migrations_ folder.
1. **prune-migrations** - runs **clean-build**, then removes migrations from database which are not present in _dist/db/migrations_.
1. **migrate** - runs **clean-build**, then migrates up unmigrated migrations in _dist/db/migrations_ to database.
1. **migrate-down \<name\>** - runs **clean-build**, then migrates down a migrated migration in _dist/db/migrations_ from database.
1. **start-back-end** - starts node monitor, then starts a watcher to detect changes in _dist/backEnd_ folder and re-starts node monitor every time a change is detected.
1. **start-front-endr** - starts webpack dev server, then starts a watcher to detect changes in _dist/frontEnd_ folder and re-starts webpack dev server every time a change is detected.
1. **start-servers-and-watchers** - runs **start-back-end**, **start-front-end** and **build-with-watch**.
1. **start** - runs **clean-build**, then **start-servers-and-watchers**.
1. **eslint-test** - runs standard in _src_
1. **eslint-fix** - runs standard --fix in _src_
1. **test-back-end** - runs Istanbul with mocha on back end to generate test coverage report, then opens the report on browser.
1. **test-front-end** - runs Istanbul with mocha on front end to generate test coverage report, then opens the report on browser.
1. **test-both-ends** - runs **test-back-end**, and **test-front-end**.
1. **test** - runs **clean-build**, then **test-both-ends**.
# Dependencies
1. **body-parser** - for parsing post request body.
1. **chai** - assertion framework for mocha.
1. **chai-arrays** - chai extension for assertion on arrays.
1. **colors** - for adding colors to console logs.
1. **electrolyte** - for managing inversion of control and dependency injection.
1. **express** - node web framework for developing the backend.
1. **migrate-mongoose** - framework for handling mongo db migrations.
1. **mocha** - testing framework.
1. **mongodb** - for accessing mongoDB.
1. **mongoose** - ORM framework for mongoDB.
1. **node** - node core.
1. **passport** - for authentication.
1. **passport-accesstoken** - authentication strategy for passport.
1. **react** - react core.
1. **react-addons-css-transition-group** - for styling infinite calendar.
1. **react-bootstrap** - react components for bootstrap.
1. **react-dom** - for rendering react components into HTML.
1. **react-infinite-calendar** - react component for calendar.
1. **react-redux** - for managing state of react components.
1. **react-router-bootstrap** - for client side routing of react-bootstrap components.
1. **react-router-dom** - for client side routing.
1. **redux** - for managing state of the application.
1. **redux-logger** - redux middleware for logging actions.
1. **redux-promise-middleware** - redux middleware for processing promises as payloads.
1. **redux-thunk** - redux middleware for processing functions as actions.
1. **sinon** - mocking framework for mocha.
# Dev-Dependencies
1. **babel-cli** - for transpiling es6 code.
1. **babel-eslint** - for eslint.
1. **babel-loader** - for transpiling jsx and es6 in webpack.
1. **babel-plugin-transform-decorators-legacy** - babel plugin for compiling es7 decorators.
1. **babel-plugin-transform-object-rest-spread** - babel plugin for destructuring json.
1. **babel-preset-env** - for transpiling es6 code.
1. **babel-preset-es2015** - for transpiling es6 code.
1. **babel-preset-react** - for transpiling jsx.
1. **css-loader** - css loader for webpack.
1. **eslint** - for eslint.
1. **eslint-config-standard** - for eslint.
1. **eslint-config-standard-react** - for eslint.
1. **eslint-plugin-import** - for eslint.
1. **eslint-plugin-node** - for eslint.
1. **eslint-plugin-promise** - for eslint.
1. **eslint-plugin-react** - for eslint.
1. **eslint-plugin-standard** - for eslint.
1. **extract-text-webpack-plugin** - plugin for webpack to create separate bundled css file.
1. **html-webpack-exclude-assets-plugin** - plugin for webpack to exclude static files from being injected into html file.
1. **html-webpack-plugin** - for injecting webpack bundles into html file.
1. **node-sass** - for compiling scss files.
1. **nodemon** - for detecting changes in dist folder and auto-restarting server.
1. **nyc** - cli for the test coverage framework Istanbul.
1. **on-build-webpack** - to run scripts after every webpack build.
1. **sass-loader** - for bundling scss in webpack.
1. **standard** - for eslint.
1. **webpack** - bundle static files and react files.
1. **webpack-dev-server** - for serving static files after bundling with webpack.