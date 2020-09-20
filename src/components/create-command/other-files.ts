import * as fs from 'fs-extra'
import * as path from 'path'

import {
  editorConfig,
  eslintrc,
  gitignore,
  gulpFile,
  htmlContent,
  packageJson,
  prettierrc,
} from '../../helpers/file-content'

const otherFiles = async (userPath: string, flagFileName: string, log: any) => {
  const fileName = flagFileName || 'main'

  const routeFolder = userPath === '.' ? path.basename(process.cwd()) : userPath

  // create all the files
  const createFile = async (src: string, content: string | Function) => {
    const fileExtension = src.split('.').splice(1).join('.')
    const fileMainName = src[0] === '.' ? '' : src.split('.')[0]

    try {
      const Content =
        typeof content === 'function' ? content(fileName) : content

      await fs.writeFile(src, Content)
      log.log(`-- ${fileMainName}.${fileExtension} was successfully created`)
    } catch (error) {
      log.error(`Ops... we cannot create ${fileName}.${fileExtension}`)
    }
  }

  createFile(`src/html/${fileName}.html`, htmlContent(fileName))
  createFile('.babelrc', '{ "presets": ["es2015"] }')
  createFile('.editorconfig', editorConfig)
  createFile('.eslintignore', '/src/assets/js/vendor/**/*.js')
  createFile('.eslintrc', eslintrc)
  createFile('.gitignore', gitignore)
  createFile('.prettierrc', prettierrc)
  createFile('gulpfile.babel.js', gulpFile(fileName))
  createFile('package.json', packageJson(routeFolder))
  createFile('readme.md', `# ${routeFolder}`)
}

export default otherFiles
