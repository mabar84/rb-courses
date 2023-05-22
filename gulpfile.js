"use strict";

import gulp from "gulp";
import gulpSass from "gulp-sass";
import dartSass from "sass";
const sass = gulpSass(dartSass);
import fileInclude from "gulp-file-include";
import prefixer from "gulp-autoprefixer";
import del from "delete";
import ttf2woff from "gulp-ttf2woff";
import ttf2woff2 from "gulp-ttf2woff2";
import fonter from "gulp-fonter";
import imagemin, { mozjpeg, svgo } from "gulp-imagemin";
import imageminPngquant from "imagemin-pngquant";
import imageminWebp from "imagemin-webp";
import rename from "gulp-rename";

import browserSync from "browser-sync";
browserSync.create();

const settings = {
	browserSync: {
		server: "./build",
		watch: true,
	},
	sass: {
		outputStyle: "expanded",
		indentType: "space",
		indentWidth: "2",
	},
};

const path = {
	build: {
		html: "build/",
		js: "build/js/",
		css: "build/css/",
		images: "build/images/",
		fonts: "build/fonts/",
		vendor: "build/vendor/",
		sass: "build/scss/",
	},
	source: {
		html: ["src/*.html", "!src/_*.html"],
		js: ["src/js/*.js", "!src/js/_*.js"],
		sass: ["src/style/*.scss"],
		css: ["src/style/*.css", "!src/style/_*.css"],
		images: ["src/images/**/*"],
		fonts: ["src/fonts/**/*.*"],
		fontsConvert: ["src/fonts/**/*.ttf", "!src/fonts/icomoon/**/*.*"],
		fontsOTF: ["src/fonts/**/*.otf", "!src/fonts/icomoon/**/*.*"],
		vendor: [
			"src/vendor/**/*",
			"!src/vendor/_libs",
			"!src/vendor/_libs/**/*",
			"!src/vendor/**/node_modules",
			"!src/vendor/**/node_modules/**/*",
		],
	},
	watch: {
		html: ["src/**/*.html"],
		js: ["src/js/**/*.js"],
		styles: ["src/style/**/*.scss", "src/style/**/*.css"],
	},
	clean: "./build",
};

function html(cb) {
	gulp.src(path.source.html)
		.pipe(
			fileInclude({
				indent: true,
			})
		)
		.pipe(gulp.dest(path.build.html));
	cb();
}

function js(cb) {
	gulp.src(path.source.js)
		.pipe(
			fileInclude({
				indent: true,
				prefix: "//@@",
			})
		)
		.pipe(gulp.dest(path.build.js));
	cb();
}

function vendors(cb) {
	gulp.src(path.source.vendor, { dot: true }).pipe(
		gulp.dest(path.build.vendor)
	);
	cb();
}

function fonts(cb) {
	gulp.src(path.source.fonts).pipe(gulp.dest(path.build.fonts));
	cb();
}

function font2woff(cb) {
	gulp.src(path.source.fontsConvert)
		.pipe(ttf2woff())
		.pipe(gulp.dest(path.build.fonts));
	cb();
}

function font2woff2(cb) {
	gulp.src(path.source.fontsConvert)
		.pipe(ttf2woff2())
		.pipe(gulp.dest(path.build.fonts));
	cb();
}

function srcOTF2srcTTF(cb) {
	gulp.src(path.source.fontsOTF)
		.pipe(fonter({ formats: ["ttf"] }))
		.pipe(gulp.dest("src/fonts/"));
	cb();
}

function copyImages(cb) {
	gulp.src(path.source.images)
		// .pipe(imagemin([
		//     mozjpeg({quality: 90}),
		//     imageminPngquant({quality: [0.9, 0.95]}),
		//     svgo(),
		//   ]))
		.pipe(gulp.dest(path.build.images));
	cb();
}

function convertImagesToWebp(cb) {
	gulp.src(`${path.source.images}.{jpg,png}`)
		.pipe(imagemin([imageminWebp({ quality: 80 })]))
		.pipe(
			rename({
				extname: ".webp",
			})
		)
		.pipe(gulp.dest(path.build.images));
	cb();
}

function styles(cb) {
	gulp.src(path.source.sass)
		.pipe(sass(settings.sass).on("error", sass.logError))
		.pipe(prefixer())
		.pipe(gulp.dest(path.build.css));
	cb();
}

function stylesCSS(cb) {
	gulp.src(path.source.css).pipe(prefixer()).pipe(gulp.dest(path.build.css));
	cb();
}

function clean(cb) {
	del(path.clean, cb);
}

function server(cb) {
	browserSync.init(settings.browserSync);
	cb();
}

function watchFiles(cb) {
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.styles, styles);
	cb();
}

const fontsConvert = gulp.parallel(font2woff, font2woff2);
const c_font = gulp.series(srcOTF2srcTTF, fonts, fontsConvert);
const a_assets = gulp.parallel(vendors, c_font, copyImages);
const b_images = gulp.parallel(copyImages);
const build = gulp.parallel(
	html,
	js,
	styles,
	stylesCSS,
	vendors,
	c_font,
	copyImages
);

export { c_font, a_assets, build, clean, b_images, convertImagesToWebp };
export default gulp.series(build, watchFiles, server);
