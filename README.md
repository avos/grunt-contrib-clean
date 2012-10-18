# grunt-contrib-clean

> Clear files and folders.

_Note that this plugin has not yet been released, and only works with the latest bleeding-edge, in-development version of grunt. See the [When will I be able to use in-development feature 'X'?](https://github.com/gruntjs/grunt/blob/devel/docs/faq.md#when-will-i-be-able-to-use-in-development-feature-x) FAQ entry for more information._

## Getting Started
_If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide._

From the same directory as your project's [Gruntfile][Getting Started] and [package.json][], install this plugin with the following command:

```bash
npm install grunt-contrib-clean --save-dev
```

Once that's done, add this line to your project's Gruntfile:

```js
grunt.loadNpmTasks('grunt-contrib-clean');
```

If the plugin has been installed correctly, running `grunt --help` at the command line should list the newly-installed plugin's task or tasks. In addition, the plugin should be listed in package.json as a `devDependency`, which ensures that it will be installed whenever the `npm install` command is run.

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md
[package.json]: https://npmjs.org/doc/json.html


## The clean task

### Overview

In your project's Gruntfile, add a section named `clean` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  clean: {
    your_target: [/* files to delete */],
    ...
  },
})
```

_Due to the destructive nature of this task, always be cautious of the paths you clean._


### Usage Examples

In this example, running `grunt clean` will delete all specified files (or directories) in all targets, but running either `grunt clean:build` or `grunt clean:release` will delete only the specified files (or directories) for that target. Wildcards may be used.

```js
clean: {
  build: ['path/to/dir/one'],
  release: ['path/to/another/dir/one', 'path/to/another/dir/two']
}
```


## Release History

 * 2012-10-17 - v0.4.0a - Work in progress for the upcoming grunt 0.4.0, not yet officially released.
 * 2012-10-11 - v0.3.1 - Rename grunt-contrib-lib dep to grunt-lib-contrib.
 * 2012-09-22 - v0.3.0 - Options no longer accepted from global config key.
 * 2012-09-09 - v0.2.0 - Refactored from grunt-contrib into individual repo.

--
Task submitted by <a href="http://tbranyen.com/">Tim Branyen</a>.
