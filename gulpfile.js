const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task('sass', function () {
  gulp.src('*.scss')
      .pipe(sass())
      .pipe(gulp.dest(function (f) {
          return f.base;
      }))
});

gulp.task('clean', function() {
})

gulp.task('watch', function() {
  gulp.watch('*.scss', ['sass']);
})


gulp.task('default', function(done) { // <--- Insert `done` as a parameter here...
  gulp.series('clean','sass', 'watch')
  done(); // <--- ...and call it here.
})