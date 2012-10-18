# Usage Examples

In this example, running `grunt clean` will delete all specified files (or directories) in all targets, but running either `grunt clean:build` or `grunt clean:release` will delete only the specified files (or directories) for that target. Wildcards may be used.

```js
clean: {
  build: ['path/to/dir/one'],
  release: ['path/to/another/dir/one', 'path/to/another/dir/two']
}
```
