const gulp = require('gulp')
const ts = require('gulp-typescript');
const babel = require('gulp-babel')
const path = require('path')
const del = require('del')

gulp.task('delete',async ()=>{
     await del('dist/**')
})

gulp.task('esm',()=>{

    var tsProject = ts.createProject('tsconfig.json',{
        module: 'ESNext',
    });
    return tsProject.src()
    .pipe(tsProject())
    .pipe(gulp.dest('dist/esm'))

})

gulp.task('cjs',()=>{
    var tsProject = ts.createProject('tsconfig.json',{
        module: 'commonjs',
    });
    return tsProject.src()
    .pipe(tsProject())
    .pipe(gulp.dest('dist/cjs'))
})

gulp.task('copyLessFile', ()=>{
    return gulp.src(['src/**/*.less','!src/**/demo/*'])
    .pipe(gulp.dest('dist/cjs'))
    .pipe(gulp.dest('dist/esm'))
})

gulp.task('copyGlobalLessFile', ()=>{
  return gulp.src(['src/styles/**'])
  .pipe(gulp.dest('dist/cjs/styles'))
  .pipe(gulp.dest('dist/esm/styles'))
})


exports.default = gulp.series('delete','esm','cjs','copyLessFile','copyGlobalLessFile')
