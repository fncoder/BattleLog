const gulp            = require('gulp');
const browserSync     = require('browser-sync').create();
const reload          = browserSync.reload;
const sass            = require('gulp-sass');
const autoprefixer    = require('gulp-autoprefixer');
const concat          = require('gulp-concat');
const cssmin          = require('gulp-cssmin');
const uglify          = require('gulp-uglify');
const babel           = require('gulp-babel');
const rename          = require('gulp-rename');
const browserify      = require('gulp-browserify');


gulp.task('default', ['watch']);


gulp.task('server', ()=>{
  browserSync.init({
      server: {
          baseDir: "src"
      },
     browser: ['chrome']
  });
});


gulp.task('sass', ()=>{
  return gulp.src(['src/sass/battlelog.scss'])
  .pipe(concat('main.css'))
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('src/stylesheets'));
});


gulp.task('css-build', ()=>{
  return gulp.src('src/stylesheets/main.css')
  .pipe(gulp.dest('build/stylesheets'))
  .pipe(rename({suffix: '.min'}))
  .pipe(cssmin())
  .pipe(gulp.dest('build/stylesheets'))
});


gulp.task('js-build', ()=>{
  return gulp.src('src/js/modules/main.js')
  .pipe(concat('bundle.js'))
  .pipe(browserify({
    transform: ['babelify']
  }))
  .pipe(gulp.dest('src/js'))
  .pipe(gulp.dest('build/js'))
  .pipe(concat('bundle.js'))
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('build/js'))
});


gulp.task('build-scripts', ()=>{
  return gulp.src('src/js/modules/*.js')
  .pipe(babel())
  .pipe(gulp.dest('build/js/modules'))
  .pipe(rename({suffix: '.min'}))
  .pipe(babel())
  .pipe(uglify())
  .pipe(gulp.dest('build/js/modules'))
});

gulp.task('sounds', ()=>{
  return gulp.src('src/sounds/*/**')
  .pipe(gulp.dest('build/sounds'))
});


gulp.task('htmls', ()=>{
  return gulp.src('src/*.html')
  .pipe(gulp.dest('build'))
});


gulp.task('watch', ['server','sass','css-build','js-build','htmls','sounds'], ()=>{
  gulp.watch('src/sass/battlelog.scss', ['sass']).on('change', reload);
  gulp.watch('src/stylesheets/*.css', ['css-build']).on('change', reload);
  gulp.watch('src/js/*/**.js', ['js-build', 'build-scripts']).on('change', reload);
  gulp.watch('src/sounds/*/**', ['sounds']);
  gulp.watch('src/*.html', ['htmls']).on('change', reload);
});
