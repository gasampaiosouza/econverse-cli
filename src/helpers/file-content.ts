const htmlContent = (fileName: string) => `
<!DOCTYPE html>
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:vtex="http://www.vtex.com.br/2009/vtex-common"
  xmlns:vtex.cmc="http://www.vtex.com.br/2009/vtex-commerce"
  lang="pt-br"
>
  <head>
    <vtex:metaTags />

    <link
      href="/arquivos/${fileName}.css"
      rel="stylesheet"
      type="text/css"
    />
  </head>

  <body>
    <div class="e-general">
      <div class="e-header"></div>

      <div class="e-content"></div>

      <div class="e-footer"></div>
    </div>

    <script
      type="text/javascript"
      src="/arquivos/${fileName}.js"
    ></script>
  </body>
</html>`

const _reset = `
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;

    font-family: Roboto, sans-serif;
}

/* HTML5 display-role reset for older browsers */

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

body {
    line-height: 1;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote {
    &:before,
    &:after {
        content: '';
        content: none;
    }
}

q {
    &:before,
    &:after {
        content: '';
        content: none;
    }
}

input,
button {
    background-color: transparent;
    border-radius: 0;
    outline: none;
    border: 0;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

em {
    font-style: normal;
}

strong {
    font-weight: bold;
}

a {
    color: #1790de;
    text-decoration: none;
    background-color: transparent;
}

* {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
}
`

const initialJS = `
const APP = {
    methods: {
      yourMethod: function() {},
  
      init: function() {},
  
      init_ajax: function() {}
    },
  
    ajax: function() {
      return this.methods.init_ajax()
    },
  
    mounted: function() {
      return this.methods.init()
    }
  }
  
  // document ready
  $(() => APP.mounted())
  
  $(document).ajaxStop(() => APP.ajax()) 
`

const editorConfig = `
# editorconfig.org
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 4
indent_style = space
insert_final_newline = true
tab_width = 4
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
insert_final_newline = false

[*.{json,yml,eslintrc}]
indent_size = 2
`

const eslintrc = `{
    "parser": "babel-eslint",
    "parserOptions": {
       "ecmaVersion": 5,
       "sourceType": "module",
       "ecmaFeatures": {
          "impliedStrict": true
       }
    },
    "env": {
       "browser": true,
       "commonjs": true,
       "embertest": true,
       "es6": true,
       "node": true
    },
    "extends": "google",
    "rules": {
       "max-len": "off",
       "require-jsdoc": "off",
       "valid-jsdoc": "off",
       "no-invalid-this": "off",
       "space-before-function-paren": "off",
       "object-curly-spacing": "off"
    }
 }`

const gitignore = `
# fix gulp bug
npm-shrinkwrap.json

# Windows image file caches
Thumbs.db
ehthumbs.db

# Folder config file
Desktop.ini

# Recycle Bin used on file shares
$RECYCLE.BIN/

# Windows Installer files
*.cab
*.msi
*.msm
*.msp

# =========================
# Operating System Files
# =========================

# OSX
# =========================

.DS_Store
.AppleDouble
.LSOverride

# Dump file
*.stackdump

# Thumbnails
._*

# Files that might appear on external disk
.Spotlight-V100
.Trashes

# Directories potentially created on remote AFP share
.AppleDB
.AppleDesktop
Network Trash Folder
Temporary Items
.apdisk

# Editor files
*.idea
*.vscode
*.sublime-*

# Node modules
node_modules/
package-lock.json
.history

# App archives
*.map
*.log
dist/
node_modules/`

const prettierrc = `{
    "tabWidth": 3,
    "singleQuote": true,
    "trailingComma": "all",
    "endOfLine": "lf",
    "printWidth": 100,
    "quoteProps": "preserve"
}`

const gulpFile = (fileName: string) => `
import Taskerify from 'taskerify';

Taskerify.config.sourcemaps = false;
Taskerify.config.srcPath    = './src/assets';  // Src Path
Taskerify.config.distPath   = './dist/assets'; // Dist Path

const NODE_MODULES = './node_modules';
const SRC          = Taskerify.config.srcPath;
const DIST         = Taskerify.config.distPath;

const mainFiles    = ['${fileName}'];

Taskerify((mix) => {
    mainFiles.map((file) => {
        mix.browserify(SRC + "/js/" + file + ".js", DIST + "/js")
        .sass(SRC + "/scss/" + file + ".scss", DIST + "/css");
    });
});`

const packageJson = (fileName: string) => `{
    "name": "${fileName}",
    "version": "0.0.1",
    "scripts": {
        "clean": "rm -Rf ./dist",
        "start": "npm run clean && gulp --colors && gulp watch --colors",
        "build": "npm run clean && gulp --colors --production",
        "vtex": "npm run build && gulp watch --colors --production"
    },
    "repository": {
        "type": "git",
        "url": "https://bitbucket.org/robson-santana/emania"
    },
    "author": {
        "name": "Wellington Barreto",
        "email": "zeindelf@hotmail.com",
        "homepage": "https://www.zeindelf.com"
    },
    "license": "MIT",
    "homepage": "https://bitbucket.org/corebiz/emania#readme",
    "devDependencies": {
        "eslint": "^4.13.1",
        "eslint-config-google": "^0.9.1",
        "gulp": "^3.9.1",
        "gulp-clean-css": "^4.2.0",
        "gulp-cssmin": "^0.2.0",
        "taskerify": "^1.8.3"
    },
    "dependencies": {
        "easyzoom": "^2.5.0",
        "i": "^0.3.6",
        "lazysizes": "^4.0.1"
    },
    "engines": {
        "node": ">= 6.0.0"
    }
}`

export {
  _reset,
  initialJS,
  editorConfig,
  eslintrc,
  gitignore,
  prettierrc,
  gulpFile,
  packageJson,
  htmlContent,
}
