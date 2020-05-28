const { src, series, parallel, dest, watch } = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");

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

function scriptJs() {
  /**
   * scripts Js
   */
  return src("./src/js/*.js").pipe(dest("./public/js/"));
}

function imagen() {
  /**
   * solo esta esta moviendo los archivo.
   * no se esta haciendo una compilacion en las imagenes
   */
  return src("./src/img/*").pipe(dest("./public/img/"));
}

function libJs() {
  /**
   * librerias Js
   */
  return src("./src/lib/**/*").pipe(dest("./public/lib/"));
}

function appPhp() {
  return src("./src/app/*.php").pipe(dest("./public/app/"));
}

function run() {
  pugHtml();
  scssCss();
  scriptJs();
  libJs();
  imagen();
  appPhp();
}

// compilacion manual
exports.default = run;

// compilacion automatica
// exports.default = () => {
//     watch('./src/**/*.pug', pugHtml);
//     watch('./src/scss/**/*.scss', scssCss);
//     watch('./src/js/*.js', scriptJs);
//     watch('./src/lib/**/*', libJs);
//     watch('./src/img/*', imagen);
//     watch('./src/app/*.php', appPhp);
//  }

 