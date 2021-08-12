const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

gulp.task('css',()=>{
    return gulp
            .src("./CSS/**")
            .pipe(autoprefixer({ overrideBrowserslist:["last 5 version","iOS > 3","Firefox > 2"] }))
            .pipe(cssmin())
            .pipe(gulp.dest("./dist/css"))
})

gulp.task('js',()=>{
    return gulp 
        .src("./JS/**")
        .pipe(babel({presets:['es2015']}))
        .pipe(uglify())
        .pipe(gulp.dest("./dist/JS"))
})

gulp.task("watch",()=>{
    gulp.watch("./CSS/**",gulp.series("css"));
    gulp.watch("./JS/**",gulp.series("js"));

})
