'use strict';

// dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var sass = require('gulp-clean-css');
var sass = require('gulp-uglify');
var sass = require('gulp-rename');
var sass = require('gulp-changed');

////////////////////
// -SCSS/CSS
////////////////////

var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './ src / Assets /css ';

//Compile SCSS
gulp.task('compile_scss'. function(){
.pipe(sass().on('error',sass.logError))
.pipe(minifyCSS())
.pipe(rename({suffix: '.min'}))
.pipe(changed(SCSS_DEST))
.pipe(gulp.dest(SCSS_DEST));




});
