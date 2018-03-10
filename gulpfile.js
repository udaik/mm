var gulp = require("gulp");
var watch = require('gulp-watch');

var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task('watch', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
    return watch('src/**/*.ts', function (file) {
        console.log("built again", Date.now());
        return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
    });
});