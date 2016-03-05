var gulp        = require('gulp'),
	browserSync = require('browser-sync').create(),
	typescript	= require('gulp-tsc'),
	tscConfig	= require('./tsconfig.json').compilerOptions;



// default
gulp.task('default',['serve','tsc', 'watch'])


// browser sync
gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
});

gulp.task('serve:reload',function() {

	browserSync.reload();

});


// typescript compiling
gulp.task('tsc', function(){
	gulp.src(['app/**/*.ts'])
		.pipe(typescript({
			module					:	tscConfig.module,
			target					:	tscConfig.target,
			emitDecoratorMetadata	:	tscConfig.emitDecoratorMetadata,
			experimentalDecorators	:	tscConfig.experimentalDecorators,
			noImplictAny			:	tscConfig.noImplicitAny,
			removeComments			:	tscConfig.removeComments,
			noLib					:	tscConfig.noLib
		}))
		.pipe(gulp.dest('app/'))
});


// watch
gulp.task('watch', function () {

	// watch app ts file changes
	gulp.watch(['app/**/*.ts'],['tsc','serve:reload']);

	// watch html file changes
	gulp.watch(['app/**/*.html'],['serve:reload']);

	// sass
	// TODO: ad watcher for sass file changes

});