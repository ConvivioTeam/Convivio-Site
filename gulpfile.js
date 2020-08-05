'use strict';

require('harmonize')();
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var shell = require('gulp-shell');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var cleanCSS = require('gulp-clean-css');
var responsive = require('gulp-responsive');
var clean = require('gulp-clean');
var critical = require('critical').stream;

var sourceDir = './source/';
var buildDir = './destination'
var sassDir = './source/_sass/**/*.scss';
var cssDir = './destination/css';
var jsDir = './source/js/*';
var jsSrc = ['./source/js/*.js', './source/js/track-outbound-links.js'];
var jsDest = './destination/js';
var imgSrc = './source/images/**/*.{jpg,jpeg,png}';
var svgSrc = './source/images/**/*.svg';
var imgDest = './destination/images';

gulp.task('clean', function () {
  return gulp.src(buildDir, { read: false })
    .pipe(clean());
});

gulp.task('sass', function () {
  return gulp.src(sassDir)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
      grid: true
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest(cssDir))
    .pipe(browserSync.stream());
});

gulp.task('scripts', function (done) {
  gulp.src(jsSrc)
    .pipe(browserify({
      insertGlobals: true,
      debug: !gulp.env.production
    }))
    .pipe(uglify())
    .pipe(gulp.dest(jsDest));
  browserSync.reload();
  done();
});

gulp.task('svgs', function (done) {
  gulp.src(svgSrc)
    .pipe(imagemin())
    .pipe(gulp.dest(imgDest))
  browserSync.reload();
  done();
});

gulp.task('bitmaps', function (done) {
  gulp.src(imgSrc)
    .pipe(responsive({
      '**/*': [
        {
          width: 500,
          rename: { suffix: '--medium' },
        },
        {
          width: 500 * 2,
          rename: { suffix: '--medium@2x' },
        },
        {
          width: 250,
          rename: { suffix: '--small' },
        },
        {
          width: 250 * 2,
          rename: { suffix: '--small@2x' },
        }
      ],
    }, {
      // Global configuration for all images
      // The output quality for JPEG, WebP and TIFF output formats
      quality: 70,
      strictMatchImages: false,
      // Use progressive (interlace) scan for JPEG and PNG output
      progressive: true,
      // Zlib compression level of PNG output format
      compressionLevel: 6,
      // Strip all metadata
      withMetadata: false,
      withoutEnlargement: false,
    }))
    .pipe(gulp.dest(imgDest))
  browserSync.reload();
  done();
});

gulp.task('critical', gulp.series(generateSite), function () {
  return gulp.src('destination/**/*.html')
    .pipe(critical({
      base: 'destination/',
      css: ['destination/css/style.css'],
      inline: true,
      dimensions: [{
        width: 320,
        height: 480
      }, {
        width: 768,
        height: 1024
      }]
    }))
    .on('error', function (err) { console.log(err.message); })
    .pipe(gulp.dest('destination'));
});

gulp.task('watch', function () {
  gulp
    // Run run `sass` task when sass files change
    .watch(sassDir, gulp.series('sass'))
    // When there is a change,
    // log a message in the console
    .on('change', function (event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

  gulp
    // Run run `scripts` task when js files change
    .watch(jsDir, gulp.series('scripts'))
    // When there is a change,
    // log a message in the console
    .on('change', function (event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

  gulp
    // Run run `bitmaps` task when bitmap images change
    .watch(imgSrc, gulp.series('bitmaps'))
    // When there is a change,
    // log a message in the console
    .on('change', function (event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

  gulp
    // Run run `svgs` task when svg images change
    .watch(svgSrc, gulp.series('svgs'))
    // When there is a change,
    // log a message in the console
    .on('change', function (event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

  gulp.watch(['source/**/*.md', 'source/**/*.html', 'source/**/*.xml', 'source/**/*.yml', 'source/**/*.txt', 'source/_includes/*.css'], gulp.series('jekyll-rebuild'));

});

// BrowserSync will serve our site on a local server for us and other devices to use
// It will also autoreload across all devices as well as keep the viewport synchronized
// between them.
gulp.task('serve', function () {
  return browserSync.init({
    notify: true,
    server: {
      baseDir: buildDir
    }
  });
});

gulp.task('jekyll-build', shell.task('bundle exec jekyll build --config jekyllconfig.yml'));
gulp.task('jekyll-rebuild', gulp.series('jekyll-build', function (done) {
  browserSync.reload();
  done();
}));

function generateSite() {
  return gulp.parallel('jekyll-build', 'sass', 'scripts', 'bitmaps', 'svgs');
}

exports.default = gulp.series(generateSite, 'serve', 'watch');
exports.build = gulp.series('critical', generateSite);
