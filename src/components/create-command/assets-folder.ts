import * as fs from 'fs-extra'
import * as process from 'process'
import jsFolder from './js-folder'
import scssFolder from './scss-folder'

const assetsFolder = async (fileName: string, log: any) => {
  process.chdir('assets')

  await fs.mkdir('images')
  await fs.mkdir('js')
  await fs.mkdir('scss')

  try {
    await scssFolder(fileName)
  } catch (error) {
    log.error('Some error ocurred while creating the SASS folder')
  }

  process.chdir('../../')

  try {
    await jsFolder(fileName)
  } catch (error) {
    log.error('Some error ocurred while creating the JS folder')
  }

  process.chdir('../../../')
}

export default assetsFolder
