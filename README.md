# grunt-docco-husky

Grunt Docco-husky plugin.

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-docco-husky`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-docco-husky');
```
You can add parameters to the grunt docco husky task and hook it to your development workflow like so:

```javascript
grunt.initConfig({
  docco_husky : {
    'project_name':'testing',
    'files':['js/*.js']
  },
  watch : {
    files: ['js/*.js', 'spec/javascripts/libs/*.spec.js'],
    tasks: 'docco_husky'
  }
});
```

[grunt]: https://github.com/cowboy/grunt
[getting_started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md

## Documentation

### NOTES: ###

Once docco-husky is installed, please add the "depedencies" property to your package.json:

```javascript
{
  "name": "jquery-plugin",
  "version": "0.0.0-ignored",
  "engines": {
    "node": ">= 0.6.0"
  },
  "scripts": {
    "test": "grunt"
  },
  "devDependencies": {
    "grunt": "~0.3.16",
    "grunt-jasmine-runner": "0.5.5"
  },
  "dependencies": {}
}
``` 

This should prevent docco-husky to crash when generating your documentation.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 David Souther  
Licensed under the MIT license.
