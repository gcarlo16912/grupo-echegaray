const { src, series, parallel, dest, watch } = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");

const browserify = require("browserify");
const babelify = require("babelify");
const vinylSourceStream = require("vinyl-source-stream");

function pugHtml() {
  return src(["./src/pug/**/*.pug", "!./src/pug/template/*.pug"])
    .pipe(pug(
      { 
        pretty: false,
        data: {
          url: ""
        }
      }
    ))
    .pipe(dest("./public/"));
}

/**
 * nested -> estilo segun sass
 * expanded -> formato estandar css
 * compact -> formato en una linea
 * compressed -> formato minificado
 */
function scssCss() {
  return src("./src/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(dest("./public/css/"));
}

function compiJs() {
  return browserify({
    entries: "src/js/app.js",
  })
    .transform(babelify)
    .bundle()
    .pipe(vinylSourceStream("app.js"))
    .pipe(dest("./public/js/"));
}

function imagen() {
  /**
   * solo esta esta moviendo los archivo.
   * no se esta haciendo una compilacion en las imagenes
   */
  return src("./src/img/*").pipe(dest("./public/img/"));
}

function appPhp() {
  return src("./src/app/*.php").pipe(dest("./public/app/"));
}

function run() {
  pugHtml();
  scssCss();
  compiJs();
  imagen();
  appPhp();
}

// compilacion manual
// exports.default = run;

// compilacion automatica
 exports.default = () => {
    watch('./src/**/*.pug', pugHtml);
    watch('./src/scss/**/*.scss', scssCss);
    watch('./src/js/*.js', compiJs);
    watch('./src/img/*', imagen);
    watch('./src/app/*.php', appPhp);
 }

 