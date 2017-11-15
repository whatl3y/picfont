# picfont

Create stylish, vectorized icons you can use in the browser, similar to
[font-awesome](http://fontawesome.io/) or [devicon](http://konpa.github.io/devicon/)
icons that you can style via CSS.

## How it Works

1. The input is one or multiple images, and if any of them are not bitmaps, converts them to bitmap (BMP)
2. The output bitmaps are converted to new, black & white bitmaps optimized for vectorization to SVG (using mkbitmap)
3. The optimized bitmaps are converted to SVG (using potrace)
4. Various font formats and CSS files are generated from the SVGs to be used in your web apps (uses [webfont-generator](https://github.com/moven/webfont-generator))

## Requirements

[Potrace](http://potrace.sourceforge.net) should be installed in the postinstall step,
although if you encounter errors you'll need to take some additional steps to install it.
Potrace needs to be installed and the `potrace` and `mkbitmap` binaries need to be in your $PATH.

If you don't have them installed yet and/or it was not added successfully in
the postinstall step, you can install them and add them to your
$PATH automatically by doing the following:

```
$ cd ./node_modules/picfont/potrace
$ npm run binaryprep
```

## Usage

TBD

## Development

Build the distribution files

```
$ npm run build
```

## Tests

```
$ npm test
```
