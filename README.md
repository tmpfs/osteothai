# Osteothai

Static website for the Osteothai School.

---

- [Developer](#developer)
  - [Site](#site)
  - [Readme](#readme)
  - [Lint](#lint)
  - [Deploy](#deploy)
- [License](#license)

---

## Developer

Install dependencies (`yarn install`) and the mkdoc tools globally (`yarn global add mkdoc`) then you can see the available tasks with `mk --tasks`. You also need [makestatic][] installed globally.

### Site

Build the static website:

```shell
makestatic
```

Build and serve the website with:

```shell
makestatic -w
```

### Readme

Build [README.md](https://github.com/tmpfs/osteothai-school/blob/master/README.md):

```shell
mk readme
```

### Lint

Lint the javascript source:

```shell
npm run lint
```

### Deploy

```shell
makestatic --clean --env stage --provider s3
makestatic --clean --env production --provider s3
```

## License

MIT

---

Created by [mkdoc](https://github.com/mkdoc/mkdoc) on April 21, 2019

[browsersync]: http://browsersync.io
[makestatic]: https://makestatic.ws

