import * as fs from 'fs-extra'
import * as process from 'process'
import { initialJS } from '../../helpers/file-content'

const jsFolder = async (fileName?: string) => {
  const mainName = fileName || 'main'

  process.chdir('js')
  await fs.writeFile(`./${mainName}.js`, initialJS)
  console.log(`-- src/assets/js/${mainName}.js file was successfully created`)
}

export default jsFolder
