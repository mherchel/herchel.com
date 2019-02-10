---
title: GulpJS Notes
date: "2019-01-15T00:00:00.000Z"
subtitle: ""
display: "false"
---
## Tasks

* You can view tasks by running `gulp --tasks`.
* Accepts error-first callback.
* Returns stream, promise, event emitter, child process, or observable.

## Public private

* Tasks can be either public or private. You can't call private tasks by `gulp task`.
* To make public, you need to export it.

```js
exports.build = build;
```

## Compose tasks

* `series()` - in order
* `parallel()` - async
