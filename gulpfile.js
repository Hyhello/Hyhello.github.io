var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
var gutil = require('gulp-util');
var babel = require('gulp-babel');
var copy = require('gulp-copy');
var imageMin = require('gulp-imagemin');
var sequence = require('run-sequence');
var revDel = require('gulp-rev-delete-original');
var revCollector = require('gulp-rev-collector');
var rev = require('gulp-rev');
var autoprefixer = require('gulp-autoprefixer');

// 压缩 public 目录 css
gulp.task('minify-css', function() {
    return gulp.src('./public/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('./public'));
});
// 压缩 public 目录 html
gulp.task('minify-html', function() {
  return gulp.src('./public/**/*.html')
    .pipe(htmlclean())
    .pipe(htmlmin({
         removeComments: true,
         minifyJS: true,
         minifyCSS: true,
         minifyURLs: true,
    }))
    .pipe(gulp.dest('./public'))
});
// 压缩 public/js 目录 js
gulp.task('minify-js', function() {
    return gulp.src(['./public/**/*.js', '!./public/lib/algolia-instant-search/**/*.js', '!./public/lib/three/**/*.js'])
        .pipe(babel())
        .pipe(uglify())
        .on('error', function(err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
        })
        .pipe(gulp.dest('./public'));
});
// 压缩assets 图片信息
gulp.task('minify-img', function(){
    return gulp.src('./assets/images/*.*')
        .pipe(imageMin({progressive: true}))
        .pipe(gulp.dest('./public/assets/images'));
});

// 添加hash
gulp.task('rev', function () {
    return gulp.src(['./public/**/*', '!./public/CNAME', '!./public/**/index.html', '!./public/**/*.json', '!./public/**/*.{otf,woff,svg,woff2,eot}'])
                .pipe(rev())
                .pipe(revDel())
                .pipe(gulp.dest('./public'))
                .pipe(rev.manifest())
                .pipe(gulp.dest('./public'));
});

// revCollector
gulp.task('revCollector', ['rev'], function () {
    return gulp.src(['./public/**/*.html', './public/*.json'])
            .pipe(revCollector({replaceReved: true}))
            .pipe(gulp.dest('./public'));
});

// 执行 gulp 命令时执行的任务
gulp.task('default', function (cb) {
	sequence(['minify-html','minify-css','minify-js', 'minify-img'], 'revCollector', cb);
});