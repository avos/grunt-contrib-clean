# Overview

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
