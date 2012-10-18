# Overview

In your project's Gruntfile, add a section named `clean` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  concat: {
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

*Due to the destructive nature of this task, always be cautious of the paths you clean.*