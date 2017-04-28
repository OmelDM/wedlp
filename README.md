# Readme

## Required tools
Before start you have to install `Node JS` and `gulp-cli`

## Setup
1. Clone the repository:
````
git clone https://github.com/OmelDM/wedlp.git
````
2. Install required node modules:
````
npm install
````

## Gulp tasks
1. `build` compiles sources, copies images, fonts, etc. to `build` directory
````
gulp build
````
2. `release` compiles minified sources, copies images, fonts, etc. to `build` directory
````
gulp release
````
3. `default` runs `build` task and starts watcher and local server
````
gulp default
````
4. `deploy` runs `release` task and pushes `build` directory's content to `gh-pages` branch
````
gulp deploy
````

## Data
Data that could be changed is separated from templates sources to `data` directory.
By default, all gulp tasks used test data from `data/test` directory.
To use custom data, add `--data=[name_of_directory_with_data]` parameter to gulp command.
E.g.:
````
gulp build --data=my_custom_data
````
