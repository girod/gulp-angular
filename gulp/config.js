'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var fs = require('fs');

var argv = require('yargs').argv;

var ngConstant = require('gulp-ng-constant');

var rename = require("gulp-rename");

var environment = argv.env || 'production';

var ENV = JSON.parse(fs.readFileSync('./src/app/config-' + environment + '.json', 'utf8')).ENV;

gulp.task('config', function () {
  gulp.src('src/app/config-' + environment + '.json')
    .pipe(ngConstant({
      name: 'myapp.config'
    }))
    .pipe(rename("config.js"))
    .pipe(gulp.dest(paths.src + '/app'));
});
