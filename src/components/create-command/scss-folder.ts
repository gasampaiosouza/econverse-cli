import * as fs from 'fs-extra'
import * as process from 'process'
import { _reset } from '../../helpers/file-content'

const scssFolder = async (fileName?: string) => {
  const mainName = fileName || 'main'

  process.chdir('scss')
  fs.writeFile(`./${mainName}.scss`, '// Your main scss here')
  console.log(
    `-- src/assets/scss/${mainName}.scss file was successfully created`
  )

  await fs.mkdir('general')
  process.chdir('general')

  fs.writeFile('./_reset.scss', _reset)
  console.log('-- src/assets/scss/_reset.scss file was successfully created')
  fs.writeFile('./_variables.scss', '// Write your variables here...')
  console.log(
    '-- src/assets/scss/_variables.scss file was successfully created'
  )
}

export default scssFolder
