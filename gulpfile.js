const gulp = require('gulp')
// const babel = require('gulp-babel')
const plumber = require('gulp-plumber')
const webpack = require('webpack-stream')
const webpack_config = require('./webpack.config.js')

gulp.task('src', function() {
  return gulp.src("./src/**/*.js")
    .pipe(plumber())
    .pipe(webpack(webpack_config))
    .pipe(gulp.dest("./"))
})

gulp.task('build', gulp.parallel('src'))
